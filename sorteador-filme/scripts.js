function sortear() {
    const series = ['you', 
    'Mansão Bly', 
    'Them', 
    'Arquivo81', 
    'Save me', 
    'Jaffrey Dahmer']
    
    const filmes = ['Donnie Darko', 
    'Hereditário', 
    'NOPE', 
    'Everything Everywhere all at once', 
    'O suspeito', 
    'Queen & Slim', 
    'Character', 
    'Buscando', 
    'Desejo e Reparação', 
    'Incêndios', 
    'Dont Worry Darling']

    var x = document.getElementById("opcoes").value;

    function getRandomInt(max) {
        min = Math.ceil(0);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }

    const getRandomNumber = (valor) => {
        if(valor == 1){
            var numero = getRandomInt(filmes.length);
            return filmes[numero - 1]
        
        }
        else {
            var numero = getRandomInt(series.length);
             return series[numero - 1]
        } 
    }
    document.getElementById("resultado").innerHTML = getRandomNumber(x)
};
