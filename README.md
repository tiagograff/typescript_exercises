# typescript_exercises

## 01. Validação de Dados com Tipos Complexos

- Crie uma função que valide se um objeto do tipo User é válido. Um User deve ter as seguintes propriedades: id (número), name (string), email (string no formato válido de e-mail), age (número, maior que 0), address (objeto com propriedades street, city, zipcode). A função deve retornar um objeto com duas propriedades: isValid (booleano) e errors (array de strings descrevendo os erros encontrados).

## 02. Transformação e Filtragem de Dados

- Implemente uma função que receba um array de objetos do tipo Product (com propriedades id, name, price, category, stock) e retorne um novo array contendo apenas os produtos da categoria "electronics", ordenados pelo preço em ordem decrescente e que estejam em estoque (stock > 0). Adicionalmente, implemente uma função que calcule o valor total do estoque desses produtos filtrados.

## 03. Manipulação Avançada de Arquivos JSON

- Crie uma função que leia um arquivo JSON contendo uma lista de tarefas (cada tarefa tem um id, title, description, completed, dueDate). A função deve retornar um array de objetos contendo title e daysRemaining (diferença em dias entre dueDate e a data atual) das tarefas que não estão completas e que possuem dueDate maior que a data atual.

## 04. Sistema de Autenticação com Roles e Permissões

- Implemente um sistema de autenticação que use um array de usuários armazenados na memória. Cada usuário deve ter username, password, role (e.g., 'admin', 'user'). A função login deve receber username e password e retornar um token JWT se as credenciais estiverem corretas. Implemente funções para verificar se um usuário autenticado tem uma determinada permissão com base no seu role.
Manipulação de Datas com Validação

## 05. Manipulação de Datas com Validação

- Crie uma função que receba duas datas no formato YYYY-MM-DD e calcule a diferença em dias entre elas. A função deve lançar um erro se a data final for anterior à data inicial. Adicionalmente, implemente validações para verificar se as datas fornecidas são válidas.
Calculadora de Estatísticas Avançada

## 06. Calculadora de Estatísticas Avançada

- Desenvolva uma função que receba um array de números e retorne um objeto com as seguintes estatísticas: média, mediana, moda, valor mínimo, valor máximo, variância e desvio padrão. Implemente testes unitários para garantir a precisão dos cálculos.
Conversão de Moeda com Taxas Dinâmicas

## 07. Conversão de Moeda com Taxas Dinâmicas

- Implemente uma função que converta um valor de uma moeda para outra. A função deve aceitar três argumentos: o valor a ser convertido, a moeda de origem e a moeda de destino. Utilize um serviço externo (API) para obter as taxas de conversão atualizadas. A função deve retornar um objeto contendo o valor original, o valor convertido e as taxas de conversão utilizadas.
Gerenciamento de Inventário com Alerta de Baixo Estoque

## 08. Gerenciamento de Inventário com Alerta de Baixo Estoque

- Crie uma classe Inventory que gerencie um inventário de produtos. A classe deve ter métodos para adicionar um produto, remover um produto pelo id, atualizar a quantidade em estoque de um produto, e listar todos os produtos com estoque abaixo de um determinado valor. Adicionalmente, implemente um método que envie um alerta (console log ou e-mail fictício) quando o estoque de um produto estiver abaixo de um limite definido.
Sistema de Notificações com Prioridades

## 09. Sistema de Notificações com Prioridades

- Desenvolva uma classe NotificationService que gerencie notificações. A classe deve permitir adicionar notificações com diferentes níveis de prioridade (e.g., 'low', 'medium', 'high'), marcar uma notificação como lida, e listar todas as notificações não lidas ordenadas por prioridade. Implemente um método para limpar notificações antigas (mais de 30 dias).
Cache de Dados com Mecanismo de Limpeza Automática

## 10. Cache de Dados com Mecanismo de Limpeza Automática

- Crie uma classe Cache que armazene dados em memória com um tempo de expiração. A classe deve ter métodos para adicionar um valor ao cache com uma chave e um tempo de expiração, recuperar um valor do cache, e remover um valor do cache se ele tiver expirado. Adicionalmente, implemente um mecanismo que limpe automaticamente itens expirados a cada intervalo de tempo definido.

###### gerado pelo chatGPT
