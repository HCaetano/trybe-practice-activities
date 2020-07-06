#!/bin/bash

# 6. Modifique o _Shell Script_ do exercício anterior de forma que ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário. Pesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no _Shell Script_.

echo "Digite caminho de um arquivo ou diretório: "

if [ -f $1 ]; then
        echo "Caminho de um arquivo"
    elif [ -d $1 ]; then
        echo "Caminho de um diretório"
    else
        echo "Não é arquivo, nem diretório"
fi

ls -l