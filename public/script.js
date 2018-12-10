const input = document.getElementById("limit");
const dropdown = document.querySelector(".dropdown select");

// function mapToDataPoints(response) {
//     return response.map((item, index) => {
//         return {
//             x: index,
//             y: item
//         }
//     })
// }

const mapToDataPoints = response => response.map((y,x) => ({x, y}));


function render() {
    const inputVal = input.value;
    const ddVal = dropdown.value;

    fetch(`/getdata?inputVal=${inputVal}&ddVal=${ddVal}`)
    .then(response => response.json())
    .then(response => {
        const dataPoints = mapToDataPoints(response)
        const chart = new CanvasJS.Chart("fibonacci", {
            axisX: {
                minimum: 0,
                interval: 1,
                // viewportMaximum: 30
            },
            axisY: {
            },
            data: [{
                type: "line",
                dataPoints
            }]
        });
        chart.render();
    })
}

input.addEventListener("change", render);
dropdown.addEventListener("change", render);


