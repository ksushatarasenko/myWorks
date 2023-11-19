// Задачи:И на основе данного объекта создать гистограмму.
// 2) Добавьте текст для каждой колонки, используя метод fillText.
// 1)

const object = [
    {
        title: 'javascript',
        amount: 150000
    },
    {
        title: 'python',
        amount: 140000
    },
    {
        title: 'golang',
        amount: 130000
    },
    {
        title: 'java',
        amount: 120000
    }
];

const canvas = document.querySelector("#canvasHome");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    histograma();
    smiley();
});

function histograma(){
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    maxAmount = Math.max(...object.map(item => item.amount));


    const elemWidth = (canvas.width -300)/ object.length;
    const kooficient = (canvas.height - 50) / maxAmount;

    object.forEach((item, index) => {
        const elemHeight = item.amount * kooficient;
        const x = index * elemWidth;
        const y = canvas.height - elemHeight;

        ctx.fillStyle = "#0099ff";
        ctx.fillRect(x, y, elemWidth, elemHeight);

        ctx.fillStyle = "#000";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(item.title, x + elemWidth / 2, canvas.height - 10);
    });
        
    }
    histograma();
// 3)Задача: Нарисовать простую смайликовую иконку с использованием метода arc.


function smiley() {
    const ctx = canvas.getContext("2d");
    const krug = 2 * Math.PI;

    // Желтый круг
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(canvas.width - 130, 130, 100, 0, krug);
    ctx.closePath();
    ctx.fill();

    // Черные глаза
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(canvas.width - 174, 100, 14, 0, krug);
    ctx.arc(canvas.width - 86, 100, 14, 0, krug);
    ctx.closePath();
    ctx.fill();

    // Улыбка
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 6;
    ctx.arc(canvas.width - 130, 130, 60, Math.PI * 0.25, Math.PI * 0.75);
    ctx.stroke();
}

smiley();

// Напишите код, который будет рисовать простую смайликовую иконку на канвасе. Иконка должна состоять из желтого круга, двух черных глаз и улыбки.
