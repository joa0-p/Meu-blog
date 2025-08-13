// Função para alternar entre temas
        function toggleTheme() {
            document.body.classList.toggle('theme-dark');
            document.body.classList.toggle('theme-neon');
        }
 
        // Animação de entrada dos elementos
        window.addEventListener('load', function() {
            const elements = document.querySelectorAll('.info-card, .hobby-item, .social-btn');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
 
        // Efeito de digitação no nome
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
 
        // Aplicar efeito de digitação quando a página carregar
        window.addEventListener('load', function() {
            const nomeElement = document.querySelector('.nome-principal');
            const textoOriginal = nomeElement.textContent;
            setTimeout(() => {
                typeWriter(nomeElement, textoOriginal, 150);
            }, 500);
        });