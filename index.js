import express from "express";

const app = express()

// exercicio 01
app.get("/api/soma", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({ message: num1 + num2 })
})



//exercicio 02
app.get("/api/salario/:valor/:hora", (req, res) => {
    const valoHora = Number(req.params.valor)
    const horasTrabalhadas = Number(req.params.hora)

    const resultado = valoHora * horasTrabalhadas

    res.send({ resultado })
})



//exercicio 03
app.get("/api/media/:pesoUm/:pesoDois/:pesoTres/:pesoQuatro/:pesoCinco", (req, res) => {
    const pesoUm = Number(req.params.pesoUm)
    const pesoDois = Number(req.params.pesoDois)
    const pesoTres = Number(req.params.pesoTres)
    const pesoQuatro = Number(req.params.pesoQuatro)
    const pesoCinco = Number(req.params.pesoCinco)

    const somaPeso = (pesoUm + pesoDois + pesoTres + pesoQuatro + pesoCinco) / 5;

    res.send({ message: somaPeso });
});

//exercicio 04

app.get("/api/temperatura/:graus", (req, res) => {
    const graus = Number(req.params.graus);
    const f = (9 * graus + 160) / 5;

    res.send({ message: f })
})

//exercicio 05

app.get("/api/converta/:km", (req, res) => {
    const km = Number(req.params.km);
    const milha = 1.60934;
    const resultado = (milha * km);

    res.send({ message: resultado })
})

//exercicio 06

app.get("/api/:segundos", (req, res) => {
    const horas = Math.floor(req.params.segundos / 3600);
    const resto = req.params.segundos % 3600;
    const minutos = Math.floor(resto / 60);
    const segundos = resto % 60;

    const horaTotal = (`O total é ${horas} horas, ${minutos} minutos e ${segundos} segundos`);

    res.send({ message:horaTotal})
})

//exercicio 07

app.get("/api/converta/distancia/:numero", (req,res) => {
    const distancia = Number(req.params.numero);
    const metros = Math.floor(distancia * 1000);
    const centimetros = Math.floor(distancia * 10000);

    const totalDistancia = (`A distancia em metros eh ${metros} e a distancia em centimetros é ${centimetros}`);

    res.send({message:totalDistancia})
})

//exercicio 08

app.get("/api/tabuada/:numero", (req,res) =>{
    const numeroUm = Number(res.params.numeroUm);
    for(i = 0, i < 10, i++) {

    }
    
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

