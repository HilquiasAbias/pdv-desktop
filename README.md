[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

![Maintained][maintained-badge]
[![Make a pull request][prs-badge]][prs]
[![License][license-badge]](LICENSE.md)

[![Linux Build][linux-build-badge]][linux-build]
[![MacOS Build][macos-build-badge]][macos-build]
[![Windows Build][windows-build-badge]][windows-build]

# Sistema PDV
Este repositório destina-se ao desenvolvimento de um sistema de **Ponto de Venda** que pode ser usado por quiosques, lojas, mercados ou qualquer outro estabelecimento similar.

# Funcionalidades

  | Nome       | Implementado |
  |---------------|---------------------------|
  | Gestão de usuários | :white_check_mark:  |
  | Gestão de produtos | :x:  |
  | Gestão de fornecedores | :x:  |
  | Fluxo de caixa | :x:  |
  | Relatórios | :x:  |
  | Gateways de pagamento | :x:  |
  
# Avisos
- Há um problema com `yarn` e `node_modules` quando o projeto é compilado por esse empacotador. Por favor use `npm` como gerenciador de dependências.
- Este projeto fez uso de dois repositórios para o desenvolvimento inicial, um sendo [a base do projeto](https://github.com/maximegris/angular-electron) e o outro [a estrutura visual](https://github.com/primefaces/sakai-ng).

## Primeiros passos

*Clone o repositório:*

``` bash
git clone https://github.com/HilquiasAbias/pdv-desktop.git
```

*Instale as dependências:*

``` bash
npm install
cd app/
npm install
```

Se você quiser gerar componentes com Angular-cli , então **PRECISA** INSTALAR `@angular/cli` no contexto npm global.
Por favor veja [a documentação do Angular-cli](https://github.com/angular/angular-cli) se você tiver instalado uma versão anterior de `angular-cli`.

``` bash
npm install -g @angular/cli
```



Este projeto segue a [estrutura Electron Builder com dois package.json](https://www.electron.build/tutorials/two-package-structure) para otimizar o bundle final e ainda poder utilizar o ng-add.

## Estrutura do projeto

| Diretório | Descrição                                      |
|--------|--------------------------------------------------|
| app    | diretório do processo principal do Electron (NodeJS)            |
| src    | diretório do processo de renderização do Electron (Web / Angular) |

# Comandos

# Como importar bibliotecas de terceiros

# Testes

[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/maximegris/angular-electron/blob/main/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-red.svg
[prs]: http://makeapullrequest.com

[linux-build-badge]: https://github.com/maximegris/angular-electron/workflows/Linux%20Build/badge.svg
[linux-build]: https://github.com/maximegris/angular-electron/actions?query=workflow%3A%22Linux+Build%22
[macos-build-badge]: https://github.com/maximegris/angular-electron/workflows/MacOS%20Build/badge.svg
[macos-build]: https://github.com/maximegris/angular-electron/actions?query=workflow%3A%22MacOS+Build%22
[windows-build-badge]: https://github.com/maximegris/angular-electron/workflows/Windows%20Build/badge.svg
[windows-build]: https://github.com/maximegris/angular-electron/actions?query=workflow%3A%22Windows+Build%22

