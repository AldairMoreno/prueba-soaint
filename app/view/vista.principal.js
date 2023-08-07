const controladorPrincipal = require('../controller/controlador.principal');

module.exports = async(app) =>{
    app.post('/merge' , async(req, res) => {
        const requestBody = req.body;
        try{
            const resultado = await controladorPrincipal.mergeAndSortArrays(requestBody);
            res.status(200).json({mensaje: 'Merge Exitoso', resultado});
        } catch(error) {
            console.log(error.message);
            res.status(400).json({mensaje: error.message});
        }
    })

    app.use((req, res) =>{
        try{
            res.render('200', {
                titulo:"200 Merge Exitoso",
                descripcion: "200 Aplicación ejecutada correctamente"
            })
        } catch(error) {
            console.log(`Error al renderizar la página: ${error}`);
            res.status(500).json({mensaje: 'Error interno de servidor', error: error.message});
        }
    })
}