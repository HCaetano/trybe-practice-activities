#!/bin/bash

# 5. Escreva um _Shell Script_ que peça ao usuário um caminho de arquivo ou diretório e, em seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.

echo "Digite caminho de um arquivo ou diretório: "
read PATH

if [ -f $PATH ]; then
        echo "Caminho de um arquivo"
    elif [ -d $PATH ]; then
        echo "Caminho de um diretório"
    else
        echo "Não é arquivo, nem diretório"
fi

ls -l $PATH