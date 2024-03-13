## 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0; </br>

enquanto K < INDICE faça { </br>
K = K + 1; </br>
SOMA = SOMA + K; </br>
} </br>

imprimir(SOMA); </br>

Ao final do processamento, qual será o valor da variável SOMA?  </br>
R = A soma finaliza em 91.

## 3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___ </br>
R = Números Ímpares. ( 9 ) </br>
b) 2, 4, 8, 16, 32, 64, ____ </br>
R = Múltiplos de 2. (128) </br>
c) 0, 1, 4, 9, 16, 25, 36, ____ </br>
R = Soma do Número Anterior com Próximo Número Ímpar seguindo a sequência. ( 49 ) </br>
d) 4, 16, 36, 64, ____ </br>
R = Quadrado de Números Pares. ( 100 ) </br>
e) 1, 1, 2, 3, 5, 8, ____ </br>
R = Sequência de Fibonacci ( 13 ) </br>
f) 2,10, 12, 16, 17, 18, 19, ____ </br>
R = Números que iniciam com a Letra D ( 200 ) </br>

## 4) Teste das Lâmpadas

Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. </br>
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas </br>
vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. </br>
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas,  </br>
qual interruptor controla cada lâmpada?

R = Aciono o Interruptor N1 e aguardo 30min, após finalizar o tempo desligo o Interruptor N1 e acendo o N2, </br>
vou até a Sala A, Se estiver aceso é o interruptor N2, se Estiver Apagado e Frio, é o interruptor N3 e </br>
se estiver Apagado e Quente, é o N1. (Digamos que seja a lampada apagada e quente, ou seja, Interruptor N1). </br>
Após confirmar qual dos interruptores é o da Sala A (Interruptor N1), sigo para Sala B e utilizo a mesma lógica, </br>
removendo apenas o Interruptor da Sala A uma vez que ele já foi confirmado. (Se estiver apagado é o Interruptor N3, </br>
ou se estiver aceso é o Interruptor N2).</br>
