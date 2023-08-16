const express = require("express");
const app = express();
const User = require("./models/users")
//  

app.use(express.json());

app.get("/", async (req, res) => {
    const returno = await User.findAll();
    res.send(returno)
})

app.post("/cadastrar", async (req, res) => {
    console.log(req.body)

    await User.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Foi cadastrado com sucesso"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Não foi cadastrado com sucesso"
            })
        })
})

app.listen(8090, () => {
    console.log("Ta dando certo mn")
})