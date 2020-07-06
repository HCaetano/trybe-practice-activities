#!/bin/bash
echo "Qual é a sua idade?"
read IDADE
if [ $IDADE -ge 16 ] 
then 
	echo "Pode votar"
else
	echo "Não pode votar"
fi
