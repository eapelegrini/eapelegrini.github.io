<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header>
        <h1>Verificador de idade e signo</h1>
    </header>
    <section>
        <div>
            <p>Data de nascimento:
                 <input type="date" name="hsel" id="hsel">
            </p>
            <p>Sexo:
                <input type="radio" name="radsex" id="masc" checked>
                <label for="masc">Masculino</label>
                <input type="radio" name="radsex" id="femi">
                <label for="femi">Feminino</label>
            </p>
            <p>
                <input type="button" value="Checar" id='ok' onclick="ok()">
            </p>
        </div>
        <div id="res">Preencha os dados acima para ver o resultado!</div>
    </section>
    <footer>
        <p> &copy; Evandro A. P.</p>
    </footer>
    <script src="index.js"></script>
</body>
</html>
