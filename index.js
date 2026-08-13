import express from "express";

const app = express()

// exercicio 01
app.get("/api/soma", (req,res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({message: num1 + num2})
})



//exercicio 02
 app.get("/api/salario/:valor/:hora", (req,res) =>{
    const valoHora = Number(req.params.valor)
    const horasTrabalhadas = Number(req.params.hora)

    const resultado = valoHora * horasTrabalhadas

     res.send({resultado})
})



//exercicio 03
app.get("/api/media/:pesoUm/:pesoDois/:pesoTres/:pesoQuatro/:pesoCinco", (req,res) =>{
    const pesoUm = Number(req.params.pesoUm)
    const pesoDois = Number(req.params.pesoDois)
    const pesoTres = Number(req.params.pesoTres)
    const pesoQuatro = Number(req.params.pesoQuatro)
    const pesoCinco = Number (req.params.pesoCinco)

    const somaPeso = (pesoUm + pesoDois + pesoTres + pesoQuatro + pesoCinco) / 5;

     res.send({message:somaPeso});
});

//exercicio 04

app.get ("/api/temp/:graus" , (req, res) => {
    const temp = Number(req.params.tempCelsius)
    const f = (9 * temp + 160) / 5;

    res.send({message:fomr})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

