# andrei_group

Repositório Inicial do Tabalho 1 GCS 2020/1

Componentes do time:

- Andrei Rupertti


### Acordos

#### Padrão de commits

Os commits deverão ser pequenos e escritos em *inglês* com uma tag na frente, seguido pelo dominio alterado no commit em questão e por fim uma mensagem descritiva da implementação

```
Padrão: TAG(DOMAIN): MESSAGE
Exemplo: feat(payment): Add total value calculation
```

Tags:
-   feat: Código novo de uma feature visível a pessoa usuária
-   bug: Alguma correção lógica ou visual
-   doc: Atualização da documentação
-   refact: Alterações de código que não alteram o comportamente anterior

#### Trunk-based development

É utilizado Trunk-based development para o fluxo de integração e gerenciamento de software. Para mantermos o estado da aplicação sempre verde (rodando sem problemas) é necessário que tenhamos *small commits* e efetuando *integração contínua* com nossa trunk (branch dev).

Caso seja realmente necessário criar uma branch, é preciso que esta tenha *vida curta* e não dure mais do que 3 dias.

Para ser efetuada uma *release* é necessária a criação de um Pull Request dev > master e uma vez mergeada, deverá ser criada uma release da versão no github.

 
---

#### Como rodar a aplicação

Sendo uma aplicação We básica, é necessário apenas abrir em um browser o arquivo `index.html` que está dentro da pasta `src/`.


