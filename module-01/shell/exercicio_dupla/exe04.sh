#!/bin/bash

# 4. Escreva um _Shell Script_ que verifique se o caminho até um arquivo existe _("file path"_). Se ele existir, imprima na tela a mensagem: # `"O caminho _ está habilitado!"`. Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: `"Você tem permissão para editar _"`. Caso contrário, mostre a mensagem: `"Você NÃO foi autorizado a editar _"`. ***O `_` nas mensagens deve ser substituído pelo ("file path").***

FILE="/media/havyner/74AF7F021E6322A1/TADS/Coding/Trybe/shell/exercicio_dupla/exe03.sh"
if [ -e $FILE ]
    then
        echo "O caminho está $FILE habilitado!"
    else 
        echo "O caminho NÃO está $FILE habilitado!"
fi

if [ -w $FILE ]
    then
        echo "Você tem permissão para editar $FILE"
    else 
        echo "Você NÃO foi autorizado a editar $FILE"
fi