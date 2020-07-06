#!/bin/bash

# 3. Escreva um _Shell Script_ que guarde o resultado do comando `hostname` em uma variável. Imprima na tela uma mensagem: `"Este script está rodando no computador: _"` em que `"_"` é o resultado do comando `hostname` que está na variável;

HOSTNAME=`hostname`
echo $HOSTNAME