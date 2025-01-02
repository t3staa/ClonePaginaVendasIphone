// Selecionando elementos
const buttons = document.querySelectorAll("#image-picker li"); 
const image = document.querySelector("#product-image");

// Adicionando evento nos botões
buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // console.log(event); // Usando apenas para fins de estudo.

        // Removendo a classe de selecionado de todos os botões.
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        })

        // Armazenando as informações do botão clicado em button.
        const button = event.target

        // Armazenando o id do botão clicado.
        const id = button.getAttribute("id");

        // Adicionando a classe de selecionado no botão que foi clicado.
        button.querySelector(".color").classList.add("selected");

        // Mudando a imagem
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);
        
        // Adicionando um Timeout para tirar o efeito de transparencia.
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    })
})