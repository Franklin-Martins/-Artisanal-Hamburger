# Hamburguer Artesanal

#### Cenário: Uma lanchonete quer fazer um sistema de ordens para os clientes fazerem seus próprios hamburgeres a partir dos ingredientes disponíveis, onde cada ingrediente tem um nome e preço.


| ingrediente  |  Preço |
|----------|------:|
| queijo | R$ 1.50 |
| calabresa |   R$ 1.25 |
| salsicha |    R$ 0.75 |
| presunto |    R$ 0.75 |
| ovo |    R$ 1.20 |
| atum |    R$ 1.35 |
| frango |    R$ 2.50 |



#### Solução: Desenvolver um sistema onde possa ter esses ingredientes separados por nome e preço e a cada solicitação de um hamburger básico, esse mesmo hamburger pode ser customizado de acordo com os ingredientes adicionais

##### Padrões utilizados:
- Decorator
- Singleton


##### Decorator: Foi utilizado para implementar customizações dos hamburgers a partir de um hamgurger inicial que tenha carne e pão, fazendo assim que cada hamburger base possa receber uma ou várias customizações, podendo-se até mesmo isolar propriedades de cada ingrediente como nome e preço.

##### Singleton: Foi utilizado para levantar uma instancia única para controlar as ordens, centralizando onde os dados vão ser persistidos, nesse caso persistido na memória mas poderia ficar alocado em qualquer canto sem afetar onde a instância está sendo utilizada.
