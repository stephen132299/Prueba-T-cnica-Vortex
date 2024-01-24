import "reflect-metadata";
import app from './app/app';
import { inicializateDatabase } from "./database/ormconfig";

const PORT = process.env.PORT || 3000;

//Método que corre el servidor
async function main(){
    try {
        await inicializateDatabase();
        console.log("Database connected");
        app.listen(PORT, ()=> {
            console.log(`Server run on port: ${PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
}

main();