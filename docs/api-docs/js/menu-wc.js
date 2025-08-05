'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountingModule.html" data-type="entity-link" >AccountingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' : 'data-bs-target="#xs-controllers-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' :
                                            'id="xs-controllers-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' }>
                                            <li class="link">
                                                <a href="controllers/AccountingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AccountingGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingGatewayController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AdminAccountingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminAccountingController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CurrencyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' : 'data-bs-target="#xs-injectables-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' :
                                        'id="xs-injectables-links-module-AccountingModule-46a02277f81fc70371f52ea429c82974dbf28632914a5367657aeef7124490cf942ba94d854ecf1c8c08efa3d1465b224a659188787b441fc5bb5236ee2fcc57"' }>
                                        <li class="link">
                                            <a href="injectables/AccountingEventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingEventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccountingRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccountingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CurrencyRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CurrencyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FromVaultHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FromVaultHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToVaultHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToVaultHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransactionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransactionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserBalanceRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserBalanceRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserBalanceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserBalanceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawHandler</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountingModule.html" data-type="entity-link" >AccountingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccountingModule-269342c8e56cf203784561b34ba38c5618d21930089931bacf0fe4b8716fb3a951538589cd637715b39213ae4f9bec4527d17773718f7a5b1b55994728b1bf8c-1"' : 'data-bs-target="#xs-controllers-links-module-AccountingModule-269342c8e56cf203784561b34ba38c5618d21930089931bacf0fe4b8716fb3a951538589cd637715b39213ae4f9bec4527d17773718f7a5b1b55994728b1bf8c-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountingModule-269342c8e56cf203784561b34ba38c5618d21930089931bacf0fe4b8716fb3a951538589cd637715b39213ae4f9bec4527d17773718f7a5b1b55994728b1bf8c-1"' :
                                            'id="xs-controllers-links-module-AccountingModule-269342c8e56cf203784561b34ba38c5618d21930089931bacf0fe4b8716fb3a951538589cd637715b39213ae4f9bec4527d17773718f7a5b1b55994728b1bf8c-1"' }>
                                            <li class="link">
                                                <a href="controllers/AccountingHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminLoggerModule.html" data-type="entity-link" >AdminLoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminLoggerModule-9247482110b72c9261b8386dc24504e2359378e72bdc5f4c0618d4c55597054e53986cae71e7b4724536ec70ee0c2beaf14d987994917d9da6b47d0d112fc138"' : 'data-bs-target="#xs-injectables-links-module-AdminLoggerModule-9247482110b72c9261b8386dc24504e2359378e72bdc5f4c0618d4c55597054e53986cae71e7b4724536ec70ee0c2beaf14d987994917d9da6b47d0d112fc138"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminLoggerModule-9247482110b72c9261b8386dc24504e2359378e72bdc5f4c0618d4c55597054e53986cae71e7b4724536ec70ee0c2beaf14d987994917d9da6b47d0d112fc138"' :
                                        'id="xs-injectables-links-module-AdminLoggerModule-9247482110b72c9261b8386dc24504e2359378e72bdc5f4c0618d4c55597054e53986cae71e7b4724536ec70ee0c2beaf14d987994917d9da6b47d0d112fc138"' }>
                                        <li class="link">
                                            <a href="injectables/AdminLoggerRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLoggerRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AdminLoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminTipsModule.html" data-type="entity-link" >AdminTipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' : 'data-bs-target="#xs-controllers-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' :
                                            'id="xs-controllers-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' }>
                                            <li class="link">
                                                <a href="controllers/AdminAdminTipsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminAdminTipsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AdminTipsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTipsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AdminTipsGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTipsGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' : 'data-bs-target="#xs-injectables-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' :
                                        'id="xs-injectables-links-module-AdminTipsModule-02d6a27b77f99ab838e499cb50525ad6f7458ec5c8feeea8942b35e53d7b6227e185c562f4c9bd50f8e117b154c9a65905df3f115cf985b3c4b8af671a73e4e0"' }>
                                        <li class="link">
                                            <a href="injectables/AdminTipsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTipsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AdminTipsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTipsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminTipsModule.html" data-type="entity-link" >AdminTipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminTipsModule-8524929ecb00e259242c58b33ad1cefccff4c247c8685b72bb70db4d9c3dfbb835f2cf72245f27ae6cb8649f6f4d6e70e57be693722ac9b66416f30abeb1ffb2-1"' : 'data-bs-target="#xs-controllers-links-module-AdminTipsModule-8524929ecb00e259242c58b33ad1cefccff4c247c8685b72bb70db4d9c3dfbb835f2cf72245f27ae6cb8649f6f4d6e70e57be693722ac9b66416f30abeb1ffb2-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminTipsModule-8524929ecb00e259242c58b33ad1cefccff4c247c8685b72bb70db4d9c3dfbb835f2cf72245f27ae6cb8649f6f4d6e70e57be693722ac9b66416f30abeb1ffb2-1"' :
                                            'id="xs-controllers-links-module-AdminTipsModule-8524929ecb00e259242c58b33ad1cefccff4c247c8685b72bb70db4d9c3dfbb835f2cf72245f27ae6cb8649f6f4d6e70e57be693722ac9b66416f30abeb1ffb2-1"' }>
                                            <li class="link">
                                                <a href="controllers/AdminTipsHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTipsHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AffiliateAggregatedInfoModule.html" data-type="entity-link" >AffiliateAggregatedInfoModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AffiliateAggregatedInfoModule-79bc64f36797a9b5cb00221e18adff385feebaee058fcd6b5b9a5f7e44b10a6a3eaafdabde4cafc80f1b6f83be23cd28122f33d1ac06c51cc69465d830e3d8a2"' : 'data-bs-target="#xs-injectables-links-module-AffiliateAggregatedInfoModule-79bc64f36797a9b5cb00221e18adff385feebaee058fcd6b5b9a5f7e44b10a6a3eaafdabde4cafc80f1b6f83be23cd28122f33d1ac06c51cc69465d830e3d8a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateAggregatedInfoModule-79bc64f36797a9b5cb00221e18adff385feebaee058fcd6b5b9a5f7e44b10a6a3eaafdabde4cafc80f1b6f83be23cd28122f33d1ac06c51cc69465d830e3d8a2"' :
                                        'id="xs-injectables-links-module-AffiliateAggregatedInfoModule-79bc64f36797a9b5cb00221e18adff385feebaee058fcd6b5b9a5f7e44b10a6a3eaafdabde4cafc80f1b6f83be23cd28122f33d1ac06c51cc69465d830e3d8a2"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateAggregatedInfoRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateAggregatedInfoRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateAggregatedInfoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateAggregatedInfoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AffiliateCodeModule.html" data-type="entity-link" >AffiliateCodeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' : 'data-bs-target="#xs-controllers-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' :
                                            'id="xs-controllers-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' }>
                                            <li class="link">
                                                <a href="controllers/AdminAffiliateCodeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminAffiliateCodeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AffiliateCodeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateCodeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' : 'data-bs-target="#xs-injectables-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' :
                                        'id="xs-injectables-links-module-AffiliateCodeModule-8ac23334684fb8d0483300e2cc3a8506daac574936581ae02b1398a135dc23d0e5f2b85dc881654b373cc6efde891e9186c905f56c7f0a92b07e64dba9f11a9b"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateCodeRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateCodeRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateCodeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateCodeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AffiliateExternalModule.html" data-type="entity-link" >AffiliateExternalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' : 'data-bs-target="#xs-controllers-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' :
                                            'id="xs-controllers-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' }>
                                            <li class="link">
                                                <a href="controllers/AffiliateExternalController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateExternalController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' : 'data-bs-target="#xs-injectables-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' :
                                        'id="xs-injectables-links-module-AffiliateExternalModule-a52318ada1e862b4ad378e66d7bc9fa96433210e0ed9094853733b4e8a609c51671a1c943f1e9c6527255d22671bf762d45953b00475f98ea4d23a219ffe8b77"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateExternalRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateExternalRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateExternalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateExternalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AffiliateModule.html" data-type="entity-link" >AffiliateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' : 'data-bs-target="#xs-controllers-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' :
                                            'id="xs-controllers-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' }>
                                            <li class="link">
                                                <a href="controllers/AdminAffiliateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminAffiliateController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AffiliateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AffiliateGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' : 'data-bs-target="#xs-injectables-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' :
                                        'id="xs-injectables-links-module-AffiliateModule-f9cc77c02282acefd865ed3fa26f168ac12fbe136ee2e7d2d42411b8266f4e6db7e5d9b59a9dda30accbb9238e625aba9c0dbb39116a12bad285a655eb4898a7"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AffiliateModule.html" data-type="entity-link" >AffiliateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AffiliateModule-2e97dfd1f79639e33f6f5c01a72351a37f44c982db8925f6eefb10401b5b56557b85586bed7e9c988bb150053ee98f591a66d3fd307192425c13fde1b064ee98-1"' : 'data-bs-target="#xs-controllers-links-module-AffiliateModule-2e97dfd1f79639e33f6f5c01a72351a37f44c982db8925f6eefb10401b5b56557b85586bed7e9c988bb150053ee98f591a66d3fd307192425c13fde1b064ee98-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AffiliateModule-2e97dfd1f79639e33f6f5c01a72351a37f44c982db8925f6eefb10401b5b56557b85586bed7e9c988bb150053ee98f591a66d3fd307192425c13fde1b064ee98-1"' :
                                            'id="xs-controllers-links-module-AffiliateModule-2e97dfd1f79639e33f6f5c01a72351a37f44c982db8925f6eefb10401b5b56557b85586bed7e9c988bb150053ee98f591a66d3fd307192425c13fde1b064ee98-1"' }>
                                            <li class="link">
                                                <a href="controllers/AffiliateHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AffiliateStreamerModule.html" data-type="entity-link" >AffiliateStreamerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' : 'data-bs-target="#xs-controllers-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' :
                                            'id="xs-controllers-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' }>
                                            <li class="link">
                                                <a href="controllers/AdminAffiliateStreamerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminAffiliateStreamerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' : 'data-bs-target="#xs-injectables-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' :
                                        'id="xs-injectables-links-module-AffiliateStreamerModule-d64b62119cfe4a7cc55f0a6ad5ac5828108d62f6a83297527e3640767a2f84e729c265294a507559aba335f360c63a97fc8bf5f5d690c58e61862f66e661687c"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateStreamerRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateStreamerRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateStreamerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateStreamerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AffiliateUserStatsModule.html" data-type="entity-link" >AffiliateUserStatsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AffiliateUserStatsModule-394dab493f938ddf13587065d8166f2fab798f2f583e921bd3f6efd744313c302db21ac95b63144cdf2b878aa115fd80b117a0083f27850f9d40c60a9fc89891"' : 'data-bs-target="#xs-injectables-links-module-AffiliateUserStatsModule-394dab493f938ddf13587065d8166f2fab798f2f583e921bd3f6efd744313c302db21ac95b63144cdf2b878aa115fd80b117a0083f27850f9d40c60a9fc89891"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateUserStatsModule-394dab493f938ddf13587065d8166f2fab798f2f583e921bd3f6efd744313c302db21ac95b63144cdf2b878aa115fd80b117a0083f27850f9d40c60a9fc89891"' :
                                        'id="xs-injectables-links-module-AffiliateUserStatsModule-394dab493f938ddf13587065d8166f2fab798f2f583e921bd3f6efd744313c302db21ac95b63144cdf2b878aa115fd80b117a0083f27850f9d40c60a9fc89891"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateUserStatsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateUserStatsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateUserStatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateUserStatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiKeyModule.html" data-type="entity-link" >ApiKeyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' : 'data-bs-target="#xs-controllers-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' :
                                            'id="xs-controllers-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' }>
                                            <li class="link">
                                                <a href="controllers/AdminApiKeyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminApiKeyController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ApiKeyGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiKeyGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' : 'data-bs-target="#xs-injectables-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' :
                                        'id="xs-injectables-links-module-ApiKeyModule-c2960bcdb94c47c06d8ef21905b0a1ff16985af70ad3a139d9f3c3240c2d11670d028337ed5ed8c89836ab4927cbf409672b85de5df6095866d18f37c81a57a3"' }>
                                        <li class="link">
                                            <a href="injectables/ApiKeyRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiKeyRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ApiKeyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiKeyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiKeyModule.html" data-type="entity-link" >ApiKeyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ApiKeyModule-eff20a20f3cb31f2ebe53f90d4892403369e6c23a858f52a22ca95fb14d8d06c1f23ca3ce25c1f9d297f45f41d93b0ff00e26edd262ba96dcef075e94ab2a889-1"' : 'data-bs-target="#xs-controllers-links-module-ApiKeyModule-eff20a20f3cb31f2ebe53f90d4892403369e6c23a858f52a22ca95fb14d8d06c1f23ca3ce25c1f9d297f45f41d93b0ff00e26edd262ba96dcef075e94ab2a889-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ApiKeyModule-eff20a20f3cb31f2ebe53f90d4892403369e6c23a858f52a22ca95fb14d8d06c1f23ca3ce25c1f9d297f45f41d93b0ff00e26edd262ba96dcef075e94ab2a889-1"' :
                                            'id="xs-controllers-links-module-ApiKeyModule-eff20a20f3cb31f2ebe53f90d4892403369e6c23a858f52a22ca95fb14d8d06c1f23ca3ce25c1f9d297f45f41d93b0ff00e26edd262ba96dcef075e94ab2a889-1"' }>
                                            <li class="link">
                                                <a href="controllers/ApiKeyHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiKeyHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiLoggerModule.html" data-type="entity-link" >ApiLoggerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ApiLoggerModule-73242847bd57a13710dde499e9d7c9a23fbddf04eb7bc92047e0b71ed62393de00fa3eb9b0586214404b571c89214cb73b65a91bddc4365890c10f8522307d18"' : 'data-bs-target="#xs-controllers-links-module-ApiLoggerModule-73242847bd57a13710dde499e9d7c9a23fbddf04eb7bc92047e0b71ed62393de00fa3eb9b0586214404b571c89214cb73b65a91bddc4365890c10f8522307d18"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ApiLoggerModule-73242847bd57a13710dde499e9d7c9a23fbddf04eb7bc92047e0b71ed62393de00fa3eb9b0586214404b571c89214cb73b65a91bddc4365890c10f8522307d18"' :
                                            'id="xs-controllers-links-module-ApiLoggerModule-73242847bd57a13710dde499e9d7c9a23fbddf04eb7bc92047e0b71ed62393de00fa3eb9b0586214404b571c89214cb73b65a91bddc4365890c10f8522307d18"' }>
                                            <li class="link">
                                                <a href="controllers/LoggerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArbitrageActionModule.html" data-type="entity-link" >ArbitrageActionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ArbitrageActionModule-3e12929c4ba632954bb5e337b2e01f90c632209c98797ea71f0a48fece1e41aa6bdf743b0838a153f0bd98a417b3714f97c0d719dcbdc06f911e51f15600bdbe"' : 'data-bs-target="#xs-injectables-links-module-ArbitrageActionModule-3e12929c4ba632954bb5e337b2e01f90c632209c98797ea71f0a48fece1e41aa6bdf743b0838a153f0bd98a417b3714f97c0d719dcbdc06f911e51f15600bdbe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArbitrageActionModule-3e12929c4ba632954bb5e337b2e01f90c632209c98797ea71f0a48fece1e41aa6bdf743b0838a153f0bd98a417b3714f97c0d719dcbdc06f911e51f15600bdbe"' :
                                        'id="xs-injectables-links-module-ArbitrageActionModule-3e12929c4ba632954bb5e337b2e01f90c632209c98797ea71f0a48fece1e41aa6bdf743b0838a153f0bd98a417b3714f97c0d719dcbdc06f911e51f15600bdbe"' }>
                                        <li class="link">
                                            <a href="injectables/ArbitrageDepositsFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArbitrageDepositsFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ArbitrageFtdFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArbitrageFtdFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ArbitrageRegistrationFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArbitrageRegistrationFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArbitrageModule.html" data-type="entity-link" >ArbitrageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' : 'data-bs-target="#xs-controllers-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' :
                                            'id="xs-controllers-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' }>
                                            <li class="link">
                                                <a href="controllers/TrafficArbitrageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrafficArbitrageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' : 'data-bs-target="#xs-injectables-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' :
                                        'id="xs-injectables-links-module-ArbitrageModule-00b6dd7361af8f70549348df3810515e11c90134aee68dceb5bf03f9409605be1ac844fa7907a0f2a22e74851419dcadc12389027fe9fac0695fee3e367d3213"' }>
                                        <li class="link">
                                            <a href="injectables/TrafficArbitrageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrafficArbitrageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' :
                                            'id="xs-controllers-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SessionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' :
                                        'id="xs-injectables-links-module-AuthModule-aa426daa4477052c2237b4169e9507e219db9b8fc0a1582775f43077972d0086654d84a2741285eb2fb7b24c7c73df38b816b1f1d9aefcf2ee536637cd5ce2d8"' }>
                                        <li class="link">
                                            <a href="injectables/AnonymousStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnonymousStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtRefreshStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtRefreshStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionQueueProducer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionQueueProducer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionSerializer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionSerializer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionUpdateQueueProcessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionUpdateQueueProcessor</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SteamAuthOpenIdService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SteamAuthOpenIdService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BetGeneratorModule.html" data-type="entity-link" >BetGeneratorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BetGeneratorModule-6ee137ac154baf24324b0d3c42209ba19c341b1c039a2b18abc736e41902b812c2f32fdb6fa685357ab623ee85324f6fc1958c3ec2f44442eb0bb31ce67198a6"' : 'data-bs-target="#xs-injectables-links-module-BetGeneratorModule-6ee137ac154baf24324b0d3c42209ba19c341b1c039a2b18abc736e41902b812c2f32fdb6fa685357ab623ee85324f6fc1958c3ec2f44442eb0bb31ce67198a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BetGeneratorModule-6ee137ac154baf24324b0d3c42209ba19c341b1c039a2b18abc736e41902b812c2f32fdb6fa685357ab623ee85324f6fc1958c3ec2f44442eb0bb31ce67198a6"' :
                                        'id="xs-injectables-links-module-BetGeneratorModule-6ee137ac154baf24324b0d3c42209ba19c341b1c039a2b18abc736e41902b812c2f32fdb6fa685357ab623ee85324f6fc1958c3ec2f44442eb0bb31ce67198a6"' }>
                                        <li class="link">
                                            <a href="injectables/CasualStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CasualStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HighrollerStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighrollerStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StableStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StableStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StrategyFactoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyFactoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TricksterStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TricksterStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BetModule.html" data-type="entity-link" >BetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' : 'data-bs-target="#xs-controllers-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' :
                                            'id="xs-controllers-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' }>
                                            <li class="link">
                                                <a href="controllers/AdminBetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminBetController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/BetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' : 'data-bs-target="#xs-injectables-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' :
                                        'id="xs-injectables-links-module-BetModule-13cde0f6aaea205bfac144a58ae8078af7dc28e038c30fdbebe9c850ab66cdc01b16e7d9cb849c15446ac45f8f2b1b1e1bc71a8497a6cbb1c9f10c18920e5ea4"' }>
                                        <li class="link">
                                            <a href="injectables/BetCrudService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetCrudService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BetEventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetEventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BetMaxProfitService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetMaxProfitService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BetRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BetModule.html" data-type="entity-link" >BetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BetModule-2da849e24976ca680956921abce24209515ef8a82c625bbb525e52ef201057b93e4d907914de5f73d002dee90f7a67857f03d3b17750c3a89445270b3a9a3d0f-1"' : 'data-bs-target="#xs-controllers-links-module-BetModule-2da849e24976ca680956921abce24209515ef8a82c625bbb525e52ef201057b93e4d907914de5f73d002dee90f7a67857f03d3b17750c3a89445270b3a9a3d0f-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BetModule-2da849e24976ca680956921abce24209515ef8a82c625bbb525e52ef201057b93e4d907914de5f73d002dee90f7a67857f03d3b17750c3a89445270b3a9a3d0f-1"' :
                                            'id="xs-controllers-links-module-BetModule-2da849e24976ca680956921abce24209515ef8a82c625bbb525e52ef201057b93e4d907914de5f73d002dee90f7a67857f03d3b17750c3a89445270b3a9a3d0f-1"' }>
                                            <li class="link">
                                                <a href="controllers/BetHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BetModule.html" data-type="entity-link" >BetModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BetModule-94bb80fe9d00c822db48738a98cfc9a4b9ff95eb9b1da2b40be8644e6de5b49e164a01ff1ceafb7664174a5cb8512e8301b8b4a3b4d8d70775f34dc3e6565eac-2"' : 'data-bs-target="#xs-injectables-links-module-BetModule-94bb80fe9d00c822db48738a98cfc9a4b9ff95eb9b1da2b40be8644e6de5b49e164a01ff1ceafb7664174a5cb8512e8301b8b4a3b4d8d70775f34dc3e6565eac-2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BetModule-94bb80fe9d00c822db48738a98cfc9a4b9ff95eb9b1da2b40be8644e6de5b49e164a01ff1ceafb7664174a5cb8512e8301b8b4a3b4d8d70775f34dc3e6565eac-2"' :
                                        'id="xs-injectables-links-module-BetModule-94bb80fe9d00c822db48738a98cfc9a4b9ff95eb9b1da2b40be8644e6de5b49e164a01ff1ceafb7664174a5cb8512e8301b8b4a3b4d8d70775f34dc3e6565eac-2"' }>
                                        <li class="link">
                                            <a href="injectables/BetRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BetQueueProcessorModule.html" data-type="entity-link" >BetQueueProcessorModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BetQueueProducerModule.html" data-type="entity-link" >BetQueueProducerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' : 'data-bs-target="#xs-controllers-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' :
                                            'id="xs-controllers-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' }>
                                            <li class="link">
                                                <a href="controllers/AdminBetQueueController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminBetQueueController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' : 'data-bs-target="#xs-injectables-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' :
                                        'id="xs-injectables-links-module-BetQueueProducerModule-97eba09d20d3fbb5fe1b3294061a5b6fd34bcf79b863b12c0b87ee82f9b37418f4540b9f78988508cb8f140f7708dbc37797bf05083bc873119ec4e8315cde54"' }>
                                        <li class="link">
                                            <a href="injectables/BetQueueProducer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetQueueProducer</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BetsModule.html" data-type="entity-link" >BetsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BetsModule-b7491aa8b35fadac948ceb7ba62fc7d28002ee3df8d13caaf49c1ad28c5258c623e8ca4aba5c5a82eaf457c6e0de088ea12a460871c58038bd6a675933d9b2c2"' : 'data-bs-target="#xs-injectables-links-module-BetsModule-b7491aa8b35fadac948ceb7ba62fc7d28002ee3df8d13caaf49c1ad28c5258c623e8ca4aba5c5a82eaf457c6e0de088ea12a460871c58038bd6a675933d9b2c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BetsModule-b7491aa8b35fadac948ceb7ba62fc7d28002ee3df8d13caaf49c1ad28c5258c623e8ca4aba5c5a82eaf457c6e0de088ea12a460871c58038bd6a675933d9b2c2"' :
                                        'id="xs-injectables-links-module-BetsModule-b7491aa8b35fadac948ceb7ba62fc7d28002ee3df8d13caaf49c1ad28c5258c623e8ca4aba5c5a82eaf457c6e0de088ea12a460871c58038bd6a675933d9b2c2"' }>
                                        <li class="link">
                                            <a href="injectables/BetsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BGamingModule.html" data-type="entity-link" >BGamingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BGamingModule-618eee2811636c712e778cabcef2f89c72299911326023128a502d24e1c0bcfd3bca229441b28a761f033293eee15ff42e79fbf16c379ba2e19263145cda0240"' : 'data-bs-target="#xs-injectables-links-module-BGamingModule-618eee2811636c712e778cabcef2f89c72299911326023128a502d24e1c0bcfd3bca229441b28a761f033293eee15ff42e79fbf16c379ba2e19263145cda0240"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BGamingModule-618eee2811636c712e778cabcef2f89c72299911326023128a502d24e1c0bcfd3bca229441b28a761f033293eee15ff42e79fbf16c379ba2e19263145cda0240"' :
                                        'id="xs-injectables-links-module-BGamingModule-618eee2811636c712e778cabcef2f89c72299911326023128a502d24e1c0bcfd3bca229441b28a761f033293eee15ff42e79fbf16c379ba2e19263145cda0240"' }>
                                        <li class="link">
                                            <a href="injectables/BGamingApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BGamingApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BGamingWalletService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BGamingWalletService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlackjackModule.html" data-type="entity-link" >BlackjackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' : 'data-bs-target="#xs-controllers-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' :
                                            'id="xs-controllers-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' }>
                                            <li class="link">
                                                <a href="controllers/BlackjackGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackGatewayController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/BlackjackHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackHttpController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/BlackjackSocketController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackSocketController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' : 'data-bs-target="#xs-injectables-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' :
                                        'id="xs-injectables-links-module-BlackjackModule-0b4fb7eb7fecf805052f39eaab23c50875e8b6c944ab1deaaa8b746116639bbe7d18b5a05203287b48236bf455371093482cb3bc0bf3834670e56a4f65207b7b"' }>
                                        <li class="link">
                                            <a href="injectables/BlackjackDefaultUserActionWorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackDefaultUserActionWorkerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BlackjackGameLogicService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackGameLogicService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BlackjackInitGameWorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackInitGameWorkerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BlackjackMapper.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackMapper</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BlackjackNotifierService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackNotifierService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BlackjackRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BlackjackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlackjackModule.html" data-type="entity-link" >BlackjackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' : 'data-bs-target="#xs-controllers-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' :
                                            'id="xs-controllers-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' }>
                                            <li class="link">
                                                <a href="controllers/BlackjackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' : 'data-bs-target="#xs-injectables-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' :
                                        'id="xs-injectables-links-module-BlackjackModule-58f53732413e75444b6e7ece8c19c20573b88278a7e830b3c12bebe2a7a178da8a1a69161a4669ee6f9daea322c91f87362af7f0d770798821b70507a669ccc8-1"' }>
                                        <li class="link">
                                            <a href="injectables/BlackjackRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BlackjackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlackjackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BotBetModule.html" data-type="entity-link" >BotBetModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BotBetModule-e6e180fabd70d13c7e6f56f654da2b7f31480b3fe12f6c6982e15d541f1c882051605f9570c505e6a812d6b16ffa2da7b6b2c09a134a10ad253654d64bb4972d"' : 'data-bs-target="#xs-injectables-links-module-BotBetModule-e6e180fabd70d13c7e6f56f654da2b7f31480b3fe12f6c6982e15d541f1c882051605f9570c505e6a812d6b16ffa2da7b6b2c09a134a10ad253654d64bb4972d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BotBetModule-e6e180fabd70d13c7e6f56f654da2b7f31480b3fe12f6c6982e15d541f1c882051605f9570c505e6a812d6b16ffa2da7b6b2c09a134a10ad253654d64bb4972d"' :
                                        'id="xs-injectables-links-module-BotBetModule-e6e180fabd70d13c7e6f56f654da2b7f31480b3fe12f6c6982e15d541f1c882051605f9570c505e6a812d6b16ffa2da7b6b2c09a134a10ad253654d64bb4972d"' }>
                                        <li class="link">
                                            <a href="injectables/BotBetCasinoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotBetCasinoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BotWinCasinoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotWinCasinoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BotBullModule.html" data-type="entity-link" >BotBullModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BotBullModule-1d79314697909fdfbac21a58c04d33ed12e692bde538656f9af76323e3c640c29f26f019770515934195ae3b0c28585d2e3df5c9c00edfc41f784c43a9ee8bd9"' : 'data-bs-target="#xs-injectables-links-module-BotBullModule-1d79314697909fdfbac21a58c04d33ed12e692bde538656f9af76323e3c640c29f26f019770515934195ae3b0c28585d2e3df5c9c00edfc41f784c43a9ee8bd9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BotBullModule-1d79314697909fdfbac21a58c04d33ed12e692bde538656f9af76323e3c640c29f26f019770515934195ae3b0c28585d2e3df5c9c00edfc41f784c43a9ee8bd9"' :
                                        'id="xs-injectables-links-module-BotBullModule-1d79314697909fdfbac21a58c04d33ed12e692bde538656f9af76323e3c640c29f26f019770515934195ae3b0c28585d2e3df5c9c00edfc41f784c43a9ee8bd9"' }>
                                        <li class="link">
                                            <a href="injectables/BotSessionTasksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotSessionTasksService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BotsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BotsUserControlRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotsUserControlRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionSchedulerProcessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionSchedulerProcessor</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BotModule.html" data-type="entity-link" >BotModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' : 'data-bs-target="#xs-controllers-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' :
                                            'id="xs-controllers-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' }>
                                            <li class="link">
                                                <a href="controllers/BotActivityController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotActivityController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' : 'data-bs-target="#xs-injectables-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' :
                                        'id="xs-injectables-links-module-BotModule-92bbf90512f075ee56c4e48ad244f9b0da0c08e2ba5a63ad196d39f3c7700ac97cc050f688d79adf45ce681b8883bd29f01c7885320d717d9485b4e5a50821da"' }>
                                        <li class="link">
                                            <a href="injectables/BotActivityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotActivityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BotsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BotsUserControlRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotsUserControlRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BotRandomModule.html" data-type="entity-link" >BotRandomModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BotSessionModule.html" data-type="entity-link" >BotSessionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BotSessionModule-d3b408033cf898b269925de347275e643d77f528661b8a83345424154ea386f2d8285b37eed5b786063ecb2b3d2a1c75a19c11d42eaf60e5605cff6516685252"' : 'data-bs-target="#xs-injectables-links-module-BotSessionModule-d3b408033cf898b269925de347275e643d77f528661b8a83345424154ea386f2d8285b37eed5b786063ecb2b3d2a1c75a19c11d42eaf60e5605cff6516685252"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BotSessionModule-d3b408033cf898b269925de347275e643d77f528661b8a83345424154ea386f2d8285b37eed5b786063ecb2b3d2a1c75a19c11d42eaf60e5605cff6516685252"' :
                                        'id="xs-injectables-links-module-BotSessionModule-d3b408033cf898b269925de347275e643d77f528661b8a83345424154ea386f2d8285b37eed5b786063ecb2b3d2a1c75a19c11d42eaf60e5605cff6516685252"' }>
                                        <li class="link">
                                            <a href="injectables/BotRedisClient.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotRedisClient</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BotSessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotSessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CasinoModule.html" data-type="entity-link" >CasinoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CCPaymentModule.html" data-type="entity-link" >CCPaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' : 'data-bs-target="#xs-controllers-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' :
                                            'id="xs-controllers-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' }>
                                            <li class="link">
                                                <a href="controllers/CCPaymentWebhookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CCPaymentWebhookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' : 'data-bs-target="#xs-injectables-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' :
                                        'id="xs-injectables-links-module-CCPaymentModule-3fd4b91921f4a4e7270ff52bc376442582149ae94136d40333bf0ec5800c91e7af9a9995a5f0656079696e43c979653616b1443d277c636e993f142e2209bb7f"' }>
                                        <li class="link">
                                            <a href="injectables/CCPaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CCPaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CCPaymentWebhookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CCPaymentWebhookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChallengeModule.html" data-type="entity-link" >ChallengeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' : 'data-bs-target="#xs-controllers-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' :
                                            'id="xs-controllers-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' }>
                                            <li class="link">
                                                <a href="controllers/AdminChallengeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminChallengeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ChallengeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChallengeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' : 'data-bs-target="#xs-injectables-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' :
                                        'id="xs-injectables-links-module-ChallengeModule-750c9d4a10223409910b47d55198c35ac321607394f8c4a7e7bc5633bad9202bd8d0099836dc1697c6edebc1f1264884914bf45c950ba5da5cea246033837788"' }>
                                        <li class="link">
                                            <a href="injectables/ChallengeCrudService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChallengeCrudService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChallengeRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChallengeRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChallengeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChallengeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link" >ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' : 'data-bs-target="#xs-controllers-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' :
                                            'id="xs-controllers-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' }>
                                            <li class="link">
                                                <a href="controllers/AdminChatController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminChatController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ChatController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ChatGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' : 'data-bs-target="#xs-injectables-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' :
                                        'id="xs-injectables-links-module-ChatModule-cee5520bebdc3cac92cfdda4f80f1332c52ddaf225822d78fb9a1c2f873a15e2ec1a2c17de1a5df45deb1cb66e8184b3ee10054315688edbdc08e6d9b2a10b8f"' }>
                                        <li class="link">
                                            <a href="injectables/ChatDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChatRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageCensureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageCensureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link" >ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ChatModule-7691a050d5c30069e86181b29d25877919b517f743cc9d27216dba395e2ab47eab983aa1989b4c120fbe2c45fd94d6154180109b26cdae6c631a56ceeb08a7f6-1"' : 'data-bs-target="#xs-controllers-links-module-ChatModule-7691a050d5c30069e86181b29d25877919b517f743cc9d27216dba395e2ab47eab983aa1989b4c120fbe2c45fd94d6154180109b26cdae6c631a56ceeb08a7f6-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChatModule-7691a050d5c30069e86181b29d25877919b517f743cc9d27216dba395e2ab47eab983aa1989b4c120fbe2c45fd94d6154180109b26cdae6c631a56ceeb08a7f6-1"' :
                                            'id="xs-controllers-links-module-ChatModule-7691a050d5c30069e86181b29d25877919b517f743cc9d27216dba395e2ab47eab983aa1989b4c120fbe2c45fd94d6154180109b26cdae6c631a56ceeb08a7f6-1"' }>
                                            <li class="link">
                                                <a href="controllers/ChatHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComingSoonModule.html" data-type="entity-link" >ComingSoonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' : 'data-bs-target="#xs-controllers-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' :
                                            'id="xs-controllers-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' }>
                                            <li class="link">
                                                <a href="controllers/ComingSoonController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComingSoonController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' : 'data-bs-target="#xs-injectables-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' :
                                        'id="xs-injectables-links-module-ComingSoonModule-fb28e3a759caea5e8138eba960092312e1af845d35ba68afbd0ba251dba5f3c1d345c4b2d6908ed69f40a5ad4d4d0cab504241072597e27df30677f1c299dede"' }>
                                        <li class="link">
                                            <a href="injectables/ComingSoonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComingSoonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountryModule.html" data-type="entity-link" >CountryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' : 'data-bs-target="#xs-controllers-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' :
                                            'id="xs-controllers-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' }>
                                            <li class="link">
                                                <a href="controllers/CountryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GeoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' : 'data-bs-target="#xs-injectables-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' :
                                        'id="xs-injectables-links-module-CountryModule-3492001346ab73c5aa554d9177eede986d0eda3303e17bd9cbd8d505944b5e52c03d56872883849850b3f46c2ae2ce04f211aea1422ba88122ecdc93d8e91843"' }>
                                        <li class="link">
                                            <a href="injectables/CountryRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CountryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GeoCheckService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeoCheckService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CronModule.html" data-type="entity-link" >CronModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' : 'data-bs-target="#xs-controllers-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' :
                                            'id="xs-controllers-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' }>
                                            <li class="link">
                                                <a href="controllers/AdminDashboardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' : 'data-bs-target="#xs-injectables-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' :
                                        'id="xs-injectables-links-module-DashboardModule-8086d85e16d7855c64e9040804e43c2b6e91e85cdd8865968ef623ce2799de597885cfb47a3c436c46331085dd071560ccb805e1b8da5428dc289b11ac3403e0"' }>
                                        <li class="link">
                                            <a href="injectables/DashboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardV2Module.html" data-type="entity-link" >DashboardV2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' : 'data-bs-target="#xs-controllers-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' :
                                            'id="xs-controllers-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' }>
                                            <li class="link">
                                                <a href="controllers/AdminDashboardCombinedController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardCombinedController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AdminDashboardSeparatedController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardSeparatedController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' : 'data-bs-target="#xs-injectables-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' :
                                        'id="xs-injectables-links-module-DashboardV2Module-ba917dde6b439902d3d075f9f7e4294d06a8a47d285c68751296cb923e085d73f5717233ffac26e0bddc665414f2f830fab45c80bb5b99ddc126d15319c53e8a"' }>
                                        <li class="link">
                                            <a href="injectables/DashboardCombinedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardCombinedService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DashboardSeparatedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardSeparatedService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GameStatsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameStatsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GeneralStatsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneralStatsRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DebugModule.html" data-type="entity-link" >DebugModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' : 'data-bs-target="#xs-controllers-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' :
                                            'id="xs-controllers-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' }>
                                            <li class="link">
                                                <a href="controllers/DebugController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebugController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' : 'data-bs-target="#xs-injectables-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' :
                                        'id="xs-injectables-links-module-DebugModule-eb0c0a88cf679e7b14ba5396eef9b54cf532a226b6e2c34fdedc2efd6e662e523c225fffe27c1836cf6994e3868ada72fdd78e4a4039f4ed3304192f07a3d27c"' }>
                                        <li class="link">
                                            <a href="injectables/DebugAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebugAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DebugGr8Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebugGr8Service</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DebugNotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebugNotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DebugNowpaymentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebugNowpaymentsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DebugTestUserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebugTestUserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DepositModule.html" data-type="entity-link" >DepositModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' : 'data-bs-target="#xs-controllers-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' :
                                            'id="xs-controllers-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' }>
                                            <li class="link">
                                                <a href="controllers/AdminDepositController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDepositController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DepositController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DepositGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' : 'data-bs-target="#xs-injectables-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' :
                                        'id="xs-injectables-links-module-DepositModule-45dd8bdfef1031d330a834f46a173148fb70a1cf19178ba9cd022700609742c5046a0eb187293d13859b5d7a4b39d228c5a664e69f47f54b0dcf6302dec97366"' }>
                                        <li class="link">
                                            <a href="injectables/DepositRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DepositStrategyModule.html" data-type="entity-link" >DepositStrategyModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DepositStrategyModule-4c6a342b5a6aaf3606050b6d612e08b10900a61a4cef741dac5e54dd369979625ddaf2617654bd6559c73610a500ff486023829e108c786bd65700d8621a9984"' : 'data-bs-target="#xs-injectables-links-module-DepositStrategyModule-4c6a342b5a6aaf3606050b6d612e08b10900a61a4cef741dac5e54dd369979625ddaf2617654bd6559c73610a500ff486023829e108c786bd65700d8621a9984"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DepositStrategyModule-4c6a342b5a6aaf3606050b6d612e08b10900a61a4cef741dac5e54dd369979625ddaf2617654bd6559c73610a500ff486023829e108c786bd65700d8621a9984"' :
                                        'id="xs-injectables-links-module-DepositStrategyModule-4c6a342b5a6aaf3606050b6d612e08b10900a61a4cef741dac5e54dd369979625ddaf2617654bd6559c73610a500ff486023829e108c786bd65700d8621a9984"' }>
                                        <li class="link">
                                            <a href="injectables/DepositPartialResettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositPartialResettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositPartialSettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositPartialSettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositResettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositResettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositSettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositSettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositStrategyFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositStrategyFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DiceModule.html" data-type="entity-link" >DiceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' : 'data-bs-target="#xs-controllers-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' :
                                            'id="xs-controllers-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' }>
                                            <li class="link">
                                                <a href="controllers/DiceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' : 'data-bs-target="#xs-injectables-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' :
                                        'id="xs-injectables-links-module-DiceModule-defa2182c86c8af6d9a04ac012b8c4fc09716153b003b43268f29447aab15075fb79c2d2dbd27d7970c161ecdd4e026f60a9c8e3d4776a8fc4e01ead5792db73"' }>
                                        <li class="link">
                                            <a href="injectables/DiceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DoubleLoyaltyModule.html" data-type="entity-link" >DoubleLoyaltyModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DoubleLoyaltyModule-3cbdae085dbacc4ff4f90094a7992c6c52f92a6a850b645f0c36792a0848df6a4de5753902c66c16413094eceace0baea90db0c259832a4a9f5e8beb022f70b3"' : 'data-bs-target="#xs-injectables-links-module-DoubleLoyaltyModule-3cbdae085dbacc4ff4f90094a7992c6c52f92a6a850b645f0c36792a0848df6a4de5753902c66c16413094eceace0baea90db0c259832a4a9f5e8beb022f70b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DoubleLoyaltyModule-3cbdae085dbacc4ff4f90094a7992c6c52f92a6a850b645f0c36792a0848df6a4de5753902c66c16413094eceace0baea90db0c259832a4a9f5e8beb022f70b3"' :
                                        'id="xs-injectables-links-module-DoubleLoyaltyModule-3cbdae085dbacc4ff4f90094a7992c6c52f92a6a850b645f0c36792a0848df6a4de5753902c66c16413094eceace0baea90db0c259832a4a9f5e8beb022f70b3"' }>
                                        <li class="link">
                                            <a href="injectables/DoubleLoyaltyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DoubleLoyaltyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnvConfigModule.html" data-type="entity-link" >EnvConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EnvConfigModule-11f00adfa2a4505b354fe5ef30ff45067490ecd5f66ce10f794cd2de8dbdd11d1074fc49887df8a8d76de45daddca4869f0759b9a6d7ea4efc2e5f38fcf9d3a2"' : 'data-bs-target="#xs-injectables-links-module-EnvConfigModule-11f00adfa2a4505b354fe5ef30ff45067490ecd5f66ce10f794cd2de8dbdd11d1074fc49887df8a8d76de45daddca4869f0759b9a6d7ea4efc2e5f38fcf9d3a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EnvConfigModule-11f00adfa2a4505b354fe5ef30ff45067490ecd5f66ce10f794cd2de8dbdd11d1074fc49887df8a8d76de45daddca4869f0759b9a6d7ea4efc2e5f38fcf9d3a2"' :
                                        'id="xs-injectables-links-module-EnvConfigModule-11f00adfa2a4505b354fe5ef30ff45067490ecd5f66ce10f794cd2de8dbdd11d1074fc49887df8a8d76de45daddca4869f0759b9a6d7ea4efc2e5f38fcf9d3a2"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigSingleton.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigSingleton</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EvoGamesModule.html" data-type="entity-link" >EvoGamesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' : 'data-bs-target="#xs-controllers-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' :
                                            'id="xs-controllers-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' }>
                                            <li class="link">
                                                <a href="controllers/EvoGamesWalletGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvoGamesWalletGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' : 'data-bs-target="#xs-injectables-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' :
                                        'id="xs-injectables-links-module-EvoGamesModule-a721ccdbe46787036faae055fcdce3deff4eecdc9f700390cd9c34251ded2e0958680d98596313fef7b1272213728f5ff90bf50d91041a325a8c6ad4f99a48f7"' }>
                                        <li class="link">
                                            <a href="injectables/EvoGamesApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvoGamesApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EvoGamesWalletService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvoGamesWalletService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExchangeRatesModule.html" data-type="entity-link" >ExchangeRatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' : 'data-bs-target="#xs-controllers-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' :
                                            'id="xs-controllers-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' }>
                                            <li class="link">
                                                <a href="controllers/ExchangeRatesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExchangeRatesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' : 'data-bs-target="#xs-injectables-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' :
                                        'id="xs-injectables-links-module-ExchangeRatesModule-f1750ba0050ad8a498cff37692103e2d886ef441250477014c0ae096cf0272c9f3e01d61563fc1fe7c8c2e5ea959398436dbeed9a77c19600cecb4e30fafded6"' }>
                                        <li class="link">
                                            <a href="injectables/CoingeckoProviderApi.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoingeckoProviderApi</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExchangeRatesRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExchangeRatesRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExchangeRatesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExchangeRatesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExternalNotificationSenderModule.html" data-type="entity-link" >ExternalNotificationSenderModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExternalNotificationSenderModule-d29f513806af9c70eaa6eb20dbe405d3d7a1f18e2777ca9c6a0fd8544ce3351ab5e337cf4251ccb0f568354db3b42c6ddea5c21c0f23e2d63887757168aa39dc"' : 'data-bs-target="#xs-injectables-links-module-ExternalNotificationSenderModule-d29f513806af9c70eaa6eb20dbe405d3d7a1f18e2777ca9c6a0fd8544ce3351ab5e337cf4251ccb0f568354db3b42c6ddea5c21c0f23e2d63887757168aa39dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExternalNotificationSenderModule-d29f513806af9c70eaa6eb20dbe405d3d7a1f18e2777ca9c6a0fd8544ce3351ab5e337cf4251ccb0f568354db3b42c6ddea5c21c0f23e2d63887757168aa39dc"' :
                                        'id="xs-injectables-links-module-ExternalNotificationSenderModule-d29f513806af9c70eaa6eb20dbe405d3d7a1f18e2777ca9c6a0fd8544ce3351ab5e337cf4251ccb0f568354db3b42c6ddea5c21c0f23e2d63887757168aa39dc"' }>
                                        <li class="link">
                                            <a href="injectables/BalanceEmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalanceEmailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EmailSenderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailSenderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationEmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationEmailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileEmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileEmailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqModule.html" data-type="entity-link" >FaqModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' : 'data-bs-target="#xs-controllers-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' :
                                            'id="xs-controllers-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' }>
                                            <li class="link">
                                                <a href="controllers/AdminFaqController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminFaqController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FaqController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FaqGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' : 'data-bs-target="#xs-injectables-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' :
                                        'id="xs-injectables-links-module-FaqModule-0331db05426e3ead8f7899ae0aed3655f7af1ccd6b99a64fee0d9dd392fbc2a20fb967bbf72e76da5fed1b710d708ca249198b233d0bb772f3c749fa12004f98"' }>
                                        <li class="link">
                                            <a href="injectables/FaqRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FaqService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqModule.html" data-type="entity-link" >FaqModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FaqModule-a86d361503abc2c64529e04715bf9c0c1f0753bd23d663b6f09f0fbe1e60fcc70b79e548a4501c9db86b9164dbd6e64c54b8431bd3a55a997bf2fdb890a22d36-1"' : 'data-bs-target="#xs-controllers-links-module-FaqModule-a86d361503abc2c64529e04715bf9c0c1f0753bd23d663b6f09f0fbe1e60fcc70b79e548a4501c9db86b9164dbd6e64c54b8431bd3a55a997bf2fdb890a22d36-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FaqModule-a86d361503abc2c64529e04715bf9c0c1f0753bd23d663b6f09f0fbe1e60fcc70b79e548a4501c9db86b9164dbd6e64c54b8431bd3a55a997bf2fdb890a22d36-1"' :
                                            'id="xs-controllers-links-module-FaqModule-a86d361503abc2c64529e04715bf9c0c1f0753bd23d663b6f09f0fbe1e60fcc70b79e548a4501c9db86b9164dbd6e64c54b8431bd3a55a997bf2fdb890a22d36-1"' }>
                                            <li class="link">
                                                <a href="controllers/FaqHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FastTrackAuthModule.html" data-type="entity-link" >FastTrackAuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' : 'data-bs-target="#xs-controllers-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' :
                                            'id="xs-controllers-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' }>
                                            <li class="link">
                                                <a href="controllers/FastTrackAuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FastTrackAuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' : 'data-bs-target="#xs-injectables-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' :
                                        'id="xs-injectables-links-module-FastTrackAuthModule-3e659111d6b4a1baf5597085a84f3bf0a5e4f2a1b3ce5df2ea8b8ca1348f88564547cde6d0ffa0f4f66a1b9c9472fe9f82c8d5f69ccbe6b31dd10c2ab9c006f1"' }>
                                        <li class="link">
                                            <a href="injectables/FastTrackAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FastTrackAuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FastTrackDebugModule.html" data-type="entity-link" >FastTrackDebugModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FastTrackModule.html" data-type="entity-link" >FastTrackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' : 'data-bs-target="#xs-controllers-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' :
                                            'id="xs-controllers-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' }>
                                            <li class="link">
                                                <a href="controllers/FastTrackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FastTrackController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' : 'data-bs-target="#xs-injectables-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' :
                                        'id="xs-injectables-links-module-FastTrackModule-73e400f5204817002dcc45c6a438c6e3c8f6cfb9b8068a31046061d9f0abc78aa5cce9b9a382d6f4c37ee420c17edf0f199478150d7f140c625c12efbacf3ca2"' }>
                                        <li class="link">
                                            <a href="injectables/FastTrackBonusService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FastTrackBonusService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FastTrackCasinoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FastTrackCasinoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FastTrackCommandService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FastTrackCommandService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FastTrackQueryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FastTrackQueryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FastTrackRabbitMQModule.html" data-type="entity-link" >FastTrackRabbitMQModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureFlagApiModule.html" data-type="entity-link" >FeatureFlagApiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FeatureFlagApiModule-0e1eb2fb627de92051baf80fd00e337e156ef01f0d2ad7aa2e6a082146bf07c31b2eac6d6ade91d697f8314c0eff4ca640bf70bb15c213787ef320be5152bb58"' : 'data-bs-target="#xs-controllers-links-module-FeatureFlagApiModule-0e1eb2fb627de92051baf80fd00e337e156ef01f0d2ad7aa2e6a082146bf07c31b2eac6d6ade91d697f8314c0eff4ca640bf70bb15c213787ef320be5152bb58"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FeatureFlagApiModule-0e1eb2fb627de92051baf80fd00e337e156ef01f0d2ad7aa2e6a082146bf07c31b2eac6d6ade91d697f8314c0eff4ca640bf70bb15c213787ef320be5152bb58"' :
                                            'id="xs-controllers-links-module-FeatureFlagApiModule-0e1eb2fb627de92051baf80fd00e337e156ef01f0d2ad7aa2e6a082146bf07c31b2eac6d6ade91d697f8314c0eff4ca640bf70bb15c213787ef320be5152bb58"' }>
                                            <li class="link">
                                                <a href="controllers/FeatureFlagController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureFlagController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureFlagBOModule.html" data-type="entity-link" >FeatureFlagBOModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FileUploadModule.html" data-type="entity-link" >FileUploadModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileUploadModule-fd79e75096cfcf44ae2f21350a9e29ecb8765bfc73697573c02e93c1920bf015c9abcea844e78dcbd279527d10f799dea9893019f6e5c50f36360127f6242d9f"' : 'data-bs-target="#xs-injectables-links-module-FileUploadModule-fd79e75096cfcf44ae2f21350a9e29ecb8765bfc73697573c02e93c1920bf015c9abcea844e78dcbd279527d10f799dea9893019f6e5c50f36360127f6242d9f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileUploadModule-fd79e75096cfcf44ae2f21350a9e29ecb8765bfc73697573c02e93c1920bf015c9abcea844e78dcbd279527d10f799dea9893019f6e5c50f36360127f6242d9f"' :
                                        'id="xs-injectables-links-module-FileUploadModule-fd79e75096cfcf44ae2f21350a9e29ecb8765bfc73697573c02e93c1920bf015c9abcea844e78dcbd279527d10f799dea9893019f6e5c50f36360127f6242d9f"' }>
                                        <li class="link">
                                            <a href="injectables/ImageUploadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageUploadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GamesModule.html" data-type="entity-link" >GamesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' : 'data-bs-target="#xs-controllers-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' :
                                            'id="xs-controllers-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' }>
                                            <li class="link">
                                                <a href="controllers/GamesAdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesAdminController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GamesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' : 'data-bs-target="#xs-injectables-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' :
                                        'id="xs-injectables-links-module-GamesModule-b01fcf5069fd2d31d97588aa3d6d29c6d72c18f3131a074e2f17d837fbb9aecdfa733694567720d65f3bc02f0d5cef751a7def4fbd69b9d0dbdf1355da5eb310"' }>
                                        <li class="link">
                                            <a href="injectables/GamesAdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesAdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GamesRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GamesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GgrCommissionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GgrCommissionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GgrCommissionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GgrCommissionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayApiModule.html" data-type="entity-link" >GatewayApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayBjModule.html" data-type="entity-link" >GatewayBjModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayBoModule.html" data-type="entity-link" >GatewayBoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayClientModule.html" data-type="entity-link" >GatewayClientModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayModule.html" data-type="entity-link" >GatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' : 'data-bs-target="#xs-controllers-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' :
                                            'id="xs-controllers-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' }>
                                            <li class="link">
                                                <a href="controllers/GatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' : 'data-bs-target="#xs-injectables-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' :
                                        'id="xs-injectables-links-module-GatewayModule-5c60001c9a2f95230ca70accf97be021831dc7afeba6696edc3404bf272df7b6cc0fc509e1c3e13193e959b33805355b25d70acfdd63497f3e25a5e55491e4ca"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BackendService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackendService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayRouletteModule.html" data-type="entity-link" >GatewayRouletteModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayServerModule.html" data-type="entity-link" >GatewayServerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' :
                                            'id="xs-controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HouseGamesModule.html" data-type="entity-link" >HouseGamesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HouseGamesModule-5e6ce180104a8711f7fe67710f7e6e70b659737b9e02fe0899b3d327bb7f4a0789fe4c8817ec2264b919cb78d4552a516c2e298b7657302a71eba250456dd268"' : 'data-bs-target="#xs-injectables-links-module-HouseGamesModule-5e6ce180104a8711f7fe67710f7e6e70b659737b9e02fe0899b3d327bb7f4a0789fe4c8817ec2264b919cb78d4552a516c2e298b7657302a71eba250456dd268"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HouseGamesModule-5e6ce180104a8711f7fe67710f7e6e70b659737b9e02fe0899b3d327bb7f4a0789fe4c8817ec2264b919cb78d4552a516c2e298b7657302a71eba250456dd268"' :
                                        'id="xs-injectables-links-module-HouseGamesModule-5e6ce180104a8711f7fe67710f7e6e70b659737b9e02fe0899b3d327bb7f4a0789fe4c8817ec2264b919cb78d4552a516c2e298b7657302a71eba250456dd268"' }>
                                        <li class="link">
                                            <a href="injectables/HouseGamesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HouseGamesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HouseValidationModule.html" data-type="entity-link" >HouseValidationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HouseValidationModule-d00a871654cf107035bf750ddadc4f95dc72c950ddf0444bfd561822a62bb2adabe88c5848dda7f93e03d58d139e7ee03ab34bf28603fedaeb0f1005460bde49"' : 'data-bs-target="#xs-injectables-links-module-HouseValidationModule-d00a871654cf107035bf750ddadc4f95dc72c950ddf0444bfd561822a62bb2adabe88c5848dda7f93e03d58d139e7ee03ab34bf28603fedaeb0f1005460bde49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HouseValidationModule-d00a871654cf107035bf750ddadc4f95dc72c950ddf0444bfd561822a62bb2adabe88c5848dda7f93e03d58d139e7ee03ab34bf28603fedaeb0f1005460bde49"' :
                                        'id="xs-injectables-links-module-HouseValidationModule-d00a871654cf107035bf750ddadc4f95dc72c950ddf0444bfd561822a62bb2adabe88c5848dda7f93e03d58d139e7ee03ab34bf28603fedaeb0f1005460bde49"' }>
                                        <li class="link">
                                            <a href="injectables/BetAmountValidationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetAmountValidationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HttpAgentModule.html" data-type="entity-link" >HttpAgentModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-7c2e466e6e93e88ad2113bd204f0c8d38e3154a699c7a9b7cec70e185372671047a286492158621313928624eae25fce09537fe0782922f41157d3fc482b358e"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-7c2e466e6e93e88ad2113bd204f0c8d38e3154a699c7a9b7cec70e185372671047a286492158621313928624eae25fce09537fe0782922f41157d3fc482b358e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-7c2e466e6e93e88ad2113bd204f0c8d38e3154a699c7a9b7cec70e185372671047a286492158621313928624eae25fce09537fe0782922f41157d3fc482b358e"' :
                                        'id="xs-injectables-links-module-JobsModule-7c2e466e6e93e88ad2113bd204f0c8d38e3154a699c7a9b7cec70e185372671047a286492158621313928624eae25fce09537fe0782922f41157d3fc482b358e"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KenoModule.html" data-type="entity-link" >KenoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' : 'data-bs-target="#xs-controllers-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' :
                                            'id="xs-controllers-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' }>
                                            <li class="link">
                                                <a href="controllers/KenoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KenoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' : 'data-bs-target="#xs-injectables-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' :
                                        'id="xs-injectables-links-module-KenoModule-045a616cde1facae343a32f844cbec6d957593010e0a80b3e4cbf4195dbd5617ad457f7965d789b97386ebe6a1d8c09cde9b755c5ae5a684daeac6c96f0b9154"' }>
                                        <li class="link">
                                            <a href="injectables/KenoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KenoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KycModule.html" data-type="entity-link" >KycModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' : 'data-bs-target="#xs-controllers-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' :
                                            'id="xs-controllers-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' }>
                                            <li class="link">
                                                <a href="controllers/AdminKycController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminKycController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/KycController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KycController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/KycWebhookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KycWebhookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' : 'data-bs-target="#xs-injectables-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' :
                                        'id="xs-injectables-links-module-KycModule-05bb5678c4f84cc01a665f65d3c4ebc78f46f7389162c74fd507ab056562b58560ff41f68bd67c26d2ac7e24a542db9ffeb13cece91ee39abf2e810c09dd235e"' }>
                                        <li class="link">
                                            <a href="injectables/KycCrudService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KycCrudService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KycRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KycRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KycService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KycService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SumSubLevelsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SumSubLevelsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderboardModule.html" data-type="entity-link" >LeaderboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' : 'data-bs-target="#xs-controllers-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' :
                                            'id="xs-controllers-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' }>
                                            <li class="link">
                                                <a href="controllers/AdminLeaderboardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLeaderboardController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/LeaderboardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/LeaderboardGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' : 'data-bs-target="#xs-injectables-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' :
                                        'id="xs-injectables-links-module-LeaderboardModule-73048e524b1ce744d2cbddd4478cf0f7b95c104877104b8354d32155f62c58feb0daa92e2d7cd6f4704ab6e2621138be5032ae141db5f8387a789ebd83aeaef5"' }>
                                        <li class="link">
                                            <a href="injectables/LeaderboardCrudService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardCrudService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LeaderboardQueueProducer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardQueueProducer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LeaderboardRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LeaderboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderboardModule.html" data-type="entity-link" >LeaderboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LeaderboardModule-abf9b351a4a4a4e9dba0e43ca3f8091e016c9433df510f8ed3d6411627a4be97c90bd3211020a10251f7d75e57cd8f8f64513ad8b56d71c9cf3880aec315bd12-1"' : 'data-bs-target="#xs-controllers-links-module-LeaderboardModule-abf9b351a4a4a4e9dba0e43ca3f8091e016c9433df510f8ed3d6411627a4be97c90bd3211020a10251f7d75e57cd8f8f64513ad8b56d71c9cf3880aec315bd12-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LeaderboardModule-abf9b351a4a4a4e9dba0e43ca3f8091e016c9433df510f8ed3d6411627a4be97c90bd3211020a10251f7d75e57cd8f8f64513ad8b56d71c9cf3880aec315bd12-1"' :
                                            'id="xs-controllers-links-module-LeaderboardModule-abf9b351a4a4a4e9dba0e43ca3f8091e016c9433df510f8ed3d6411627a4be97c90bd3211020a10251f7d75e57cd8f8f64513ad8b56d71c9cf3880aec315bd12-1"' }>
                                            <li class="link">
                                                <a href="controllers/LeaderboardHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LimboModule.html" data-type="entity-link" >LimboModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' : 'data-bs-target="#xs-controllers-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' :
                                            'id="xs-controllers-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' }>
                                            <li class="link">
                                                <a href="controllers/LimboController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LimboController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' : 'data-bs-target="#xs-injectables-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' :
                                        'id="xs-injectables-links-module-LimboModule-6d1f407b91d382062672a977fe1a20c853ec89042c821a808f8d7cbfecc1411fac930e2778a6bdaa0290892e533a27f5e288d7eb4bebfe8d13a42157629244a4"' }>
                                        <li class="link">
                                            <a href="injectables/LimboService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LimboService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LiveBetsModule.html" data-type="entity-link" >LiveBetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' : 'data-bs-target="#xs-controllers-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' :
                                            'id="xs-controllers-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' }>
                                            <li class="link">
                                                <a href="controllers/LiveBetsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveBetsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' : 'data-bs-target="#xs-injectables-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' :
                                        'id="xs-injectables-links-module-LiveBetsModule-a1cd59bb0351955c3a8487778cbd977858f071f0051eec7724a4372511b9711225e9d753b7a5b3a2b22bfb91c952e379f04848110bb89ebfe55d450b5bff3679"' }>
                                        <li class="link">
                                            <a href="injectables/LiveBetsCacheRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveBetsCacheRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LiveBetsCacheService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveBetsCacheService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LiveBetsNotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveBetsNotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LiveBetsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveBetsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LiveBetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveBetsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LiveBetsUtils.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveBetsUtils</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoggerModule-e81f5e108d1285a6b074e5b962b37cf98f4b862acc42a3a12bd94b231ae71751ce8f787ed72f5eaf0c643859d5d2d1795221c717899405c82c36021ceab6f449"' : 'data-bs-target="#xs-injectables-links-module-LoggerModule-e81f5e108d1285a6b074e5b962b37cf98f4b862acc42a3a12bd94b231ae71751ce8f787ed72f5eaf0c643859d5d2d1795221c717899405c82c36021ceab6f449"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-e81f5e108d1285a6b074e5b962b37cf98f4b862acc42a3a12bd94b231ae71751ce8f787ed72f5eaf0c643859d5d2d1795221c717899405c82c36021ceab6f449"' :
                                        'id="xs-injectables-links-module-LoggerModule-e81f5e108d1285a6b074e5b962b37cf98f4b862acc42a3a12bd94b231ae71751ce8f787ed72f5eaf0c643859d5d2d1795221c717899405c82c36021ceab6f449"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailEngineModule.html" data-type="entity-link" >MailEngineModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MinesModule.html" data-type="entity-link" >MinesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' : 'data-bs-target="#xs-controllers-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' :
                                            'id="xs-controllers-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' }>
                                            <li class="link">
                                                <a href="controllers/MinesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MinesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' : 'data-bs-target="#xs-injectables-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' :
                                        'id="xs-injectables-links-module-MinesModule-ddf5f611309b340cc4f86927499cd1f74c73d163b825de3fa6b6c9cf4c9ce1c63ceed590f263e50006f36f7dcf559ec9064888d44e19d5a62f4bb37e6052eb49"' }>
                                        <li class="link">
                                            <a href="injectables/MinesRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MinesRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MinesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MinesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MonkeyRunsModule.html" data-type="entity-link" >MonkeyRunsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' : 'data-bs-target="#xs-controllers-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' :
                                            'id="xs-controllers-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' }>
                                            <li class="link">
                                                <a href="controllers/MonkeyRunController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonkeyRunController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' : 'data-bs-target="#xs-injectables-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' :
                                        'id="xs-injectables-links-module-MonkeyRunsModule-7c138ccc20e084226986ce9bf218f816c380e75ed9b394d6b2472f61d1ed033088cb655484ae11f1a18c38dc6b567fa6231c78045169e10934a98098d48f4735"' }>
                                        <li class="link">
                                            <a href="injectables/MonkeyRunRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonkeyRunRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MonkeyRunService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonkeyRunService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NetworkModule.html" data-type="entity-link" >NetworkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' : 'data-bs-target="#xs-controllers-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' :
                                            'id="xs-controllers-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' }>
                                            <li class="link">
                                                <a href="controllers/NetworkController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NetworkController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' : 'data-bs-target="#xs-injectables-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' :
                                        'id="xs-injectables-links-module-NetworkModule-52a0cfa31002e2648d38d0a5c3008b4162b7712387f79ed0f544158a1a0f5acbbdf108f23a8ceb069686ac45c86dc522084261e28d2c1b0766a2b6c99a45d6fc"' }>
                                        <li class="link">
                                            <a href="injectables/NetworkService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NetworkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' : 'data-bs-target="#xs-controllers-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' :
                                            'id="xs-controllers-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' : 'data-bs-target="#xs-injectables-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' :
                                        'id="xs-injectables-links-module-NotificationModule-0dfbe6e5980e0c5343f68e3934ff4813aef2d9712ddbdf3b4d07faf2fc4fa5d1720c2c9b2cbe2ce7a9c1cc08587479ccfcc2471c8be5d4afe06451433a184e04"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtNotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtNotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NowpaymentsModule.html" data-type="entity-link" >NowpaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' : 'data-bs-target="#xs-controllers-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' :
                                            'id="xs-controllers-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' }>
                                            <li class="link">
                                                <a href="controllers/NowpaymentsWebhookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NowpaymentsWebhookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' : 'data-bs-target="#xs-injectables-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' :
                                        'id="xs-injectables-links-module-NowpaymentsModule-6f0a3529469939aea0d2fff4d0185f79738f45932b993da75a7d3da41f276eb802b72c5f6b3d69e2946c2853cf3c94a795ab12743b447d771d0b53042fa02074"' }>
                                        <li class="link">
                                            <a href="injectables/NowpaymentsApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NowpaymentsApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NowpaymentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NowpaymentsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NowpaymentsWebhookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NowpaymentsWebhookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OnlineTrackerModule.html" data-type="entity-link" >OnlineTrackerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OnlineTrackerModule-ed517492f6af029a3caaea3247cb11bab5d35b30e9a02d96e251dd51ec36638156665a679ee09805c017810b7b2fa6905460fae24d87b5c3c948f807ae7ca22d"' : 'data-bs-target="#xs-injectables-links-module-OnlineTrackerModule-ed517492f6af029a3caaea3247cb11bab5d35b30e9a02d96e251dd51ec36638156665a679ee09805c017810b7b2fa6905460fae24d87b5c3c948f807ae7ca22d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OnlineTrackerModule-ed517492f6af029a3caaea3247cb11bab5d35b30e9a02d96e251dd51ec36638156665a679ee09805c017810b7b2fa6905460fae24d87b5c3c948f807ae7ca22d"' :
                                        'id="xs-injectables-links-module-OnlineTrackerModule-ed517492f6af029a3caaea3247cb11bab5d35b30e9a02d96e251dd51ec36638156665a679ee09805c017810b7b2fa6905460fae24d87b5c3c948f807ae7ca22d"' }>
                                        <li class="link">
                                            <a href="injectables/OnlineTrackerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnlineTrackerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentModule-8899ba2b2d53aa94082b2f532da5a7a8e1f45ba2e46b4cd8ede214426bdb596fc8fcd5543c554643c44de44ddcef26b281861ff581319501eaddbf3dd509aec6"' : 'data-bs-target="#xs-injectables-links-module-PaymentModule-8899ba2b2d53aa94082b2f532da5a7a8e1f45ba2e46b4cd8ede214426bdb596fc8fcd5543c554643c44de44ddcef26b281861ff581319501eaddbf3dd509aec6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-8899ba2b2d53aa94082b2f532da5a7a8e1f45ba2e46b4cd8ede214426bdb596fc8fcd5543c554643c44de44ddcef26b281861ff581319501eaddbf3dd509aec6"' :
                                        'id="xs-injectables-links-module-PaymentModule-8899ba2b2d53aa94082b2f532da5a7a8e1f45ba2e46b4cd8ede214426bdb596fc8fcd5543c554643c44de44ddcef26b281861ff581319501eaddbf3dd509aec6"' }>
                                        <li class="link">
                                            <a href="injectables/TestPaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestPaymentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PaymentModule-9e03c44ea08a20cd393f952e6b6868fe8656101c80ac9ef79c8a6eafb0f85378bf01b6ce00eec181c5320c0e9f7ea9dcd1b00b13eb66f315137e9f0195044906-1"' : 'data-bs-target="#xs-controllers-links-module-PaymentModule-9e03c44ea08a20cd393f952e6b6868fe8656101c80ac9ef79c8a6eafb0f85378bf01b6ce00eec181c5320c0e9f7ea9dcd1b00b13eb66f315137e9f0195044906-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-9e03c44ea08a20cd393f952e6b6868fe8656101c80ac9ef79c8a6eafb0f85378bf01b6ce00eec181c5320c0e9f7ea9dcd1b00b13eb66f315137e9f0195044906-1"' :
                                            'id="xs-controllers-links-module-PaymentModule-9e03c44ea08a20cd393f952e6b6868fe8656101c80ac9ef79c8a6eafb0f85378bf01b6ce00eec181c5320c0e9f7ea9dcd1b00b13eb66f315137e9f0195044906-1"' }>
                                            <li class="link">
                                                <a href="controllers/DepositHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositHttpController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WithdrawHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentProviderModule.html" data-type="entity-link" >PaymentProviderModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentProviderModule-162ba5c6348c629a5f8615d158b7f3da1190f2ad75f2c972f2cce4292c5f13b1eebd6ea407fd9fb9406eb8723014e96aa0a85d223d1b517aa15af3336aae3df0"' : 'data-bs-target="#xs-injectables-links-module-PaymentProviderModule-162ba5c6348c629a5f8615d158b7f3da1190f2ad75f2c972f2cce4292c5f13b1eebd6ea407fd9fb9406eb8723014e96aa0a85d223d1b517aa15af3336aae3df0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentProviderModule-162ba5c6348c629a5f8615d158b7f3da1190f2ad75f2c972f2cce4292c5f13b1eebd6ea407fd9fb9406eb8723014e96aa0a85d223d1b517aa15af3336aae3df0"' :
                                        'id="xs-injectables-links-module-PaymentProviderModule-162ba5c6348c629a5f8615d158b7f3da1190f2ad75f2c972f2cce4292c5f13b1eebd6ea407fd9fb9406eb8723014e96aa0a85d223d1b517aa15af3336aae3df0"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentProviderRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentProviderRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentProviderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentProviderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlinkoModule.html" data-type="entity-link" >PlinkoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' : 'data-bs-target="#xs-controllers-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' :
                                            'id="xs-controllers-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' }>
                                            <li class="link">
                                                <a href="controllers/PlinkoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlinkoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' : 'data-bs-target="#xs-injectables-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' :
                                        'id="xs-injectables-links-module-PlinkoModule-01ec247c0a9daeee657df44263c587e6f4559686a8c8b5ee17f957df1d2964963118cfd63bb8ede213241f03da5037cfd733bf0a566acf589ef05838ebfccc30"' }>
                                        <li class="link">
                                            <a href="injectables/PlinkoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlinkoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Pm8ApiModule.html" data-type="entity-link" >Pm8ApiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Pm8ApiModule-e2518556ace25d414f4b9c6e807f6d6704549d82db4354a7a1ced426aeef49d9aff3592c53abd808c524e9be3bafa06d9ee80e4cbbf43c5bc1b5836930680012"' : 'data-bs-target="#xs-injectables-links-module-Pm8ApiModule-e2518556ace25d414f4b9c6e807f6d6704549d82db4354a7a1ced426aeef49d9aff3592c53abd808c524e9be3bafa06d9ee80e4cbbf43c5bc1b5836930680012"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Pm8ApiModule-e2518556ace25d414f4b9c6e807f6d6704549d82db4354a7a1ced426aeef49d9aff3592c53abd808c524e9be3bafa06d9ee80e4cbbf43c5bc1b5836930680012"' :
                                        'id="xs-injectables-links-module-Pm8ApiModule-e2518556ace25d414f4b9c6e807f6d6704549d82db4354a7a1ced426aeef49d9aff3592c53abd808c524e9be3bafa06d9ee80e4cbbf43c5bc1b5836930680012"' }>
                                        <li class="link">
                                            <a href="injectables/Pm8DataApi.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8DataApi</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8DataApiHydrateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8DataApiHydrateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Pm8AuthModule.html" data-type="entity-link" >Pm8AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Pm8AuthModule-5e885f79e59b86300b9c485ef4d31fba798375d511e8d2c99c67a60b2923d3e4a3c76e19050d09dfb2b9f15bf891ec2e3855d0377c88d3e4b4feb0a7d47bfe53"' : 'data-bs-target="#xs-injectables-links-module-Pm8AuthModule-5e885f79e59b86300b9c485ef4d31fba798375d511e8d2c99c67a60b2923d3e4a3c76e19050d09dfb2b9f15bf891ec2e3855d0377c88d3e4b4feb0a7d47bfe53"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Pm8AuthModule-5e885f79e59b86300b9c485ef4d31fba798375d511e8d2c99c67a60b2923d3e4a3c76e19050d09dfb2b9f15bf891ec2e3855d0377c88d3e4b4feb0a7d47bfe53"' :
                                        'id="xs-injectables-links-module-Pm8AuthModule-5e885f79e59b86300b9c485ef4d31fba798375d511e8d2c99c67a60b2923d3e4a3c76e19050d09dfb2b9f15bf891ec2e3855d0377c88d3e4b4feb0a7d47bfe53"' }>
                                        <li class="link">
                                            <a href="injectables/Pm8AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Pm8IdempotencyCacheModule.html" data-type="entity-link" >Pm8IdempotencyCacheModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Pm8IdempotencyCacheModule-feb47bc732ce2a683429b93a1c04d51647192a16a7f02a0282c29861e86b7d640e9110d758bebc214d0d7a19faed3a48ede0c47f9b6eb8df30af1396c347a1ff"' : 'data-bs-target="#xs-injectables-links-module-Pm8IdempotencyCacheModule-feb47bc732ce2a683429b93a1c04d51647192a16a7f02a0282c29861e86b7d640e9110d758bebc214d0d7a19faed3a48ede0c47f9b6eb8df30af1396c347a1ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Pm8IdempotencyCacheModule-feb47bc732ce2a683429b93a1c04d51647192a16a7f02a0282c29861e86b7d640e9110d758bebc214d0d7a19faed3a48ede0c47f9b6eb8df30af1396c347a1ff"' :
                                        'id="xs-injectables-links-module-Pm8IdempotencyCacheModule-feb47bc732ce2a683429b93a1c04d51647192a16a7f02a0282c29861e86b7d640e9110d758bebc214d0d7a19faed3a48ede0c47f9b6eb8df30af1396c347a1ff"' }>
                                        <li class="link">
                                            <a href="injectables/Pm8CacheManager.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8CacheManager</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Pm8Module.html" data-type="entity-link" >Pm8Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' : 'data-bs-target="#xs-controllers-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' :
                                            'id="xs-controllers-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' }>
                                            <li class="link">
                                                <a href="controllers/Pm8Controller.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' : 'data-bs-target="#xs-injectables-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' :
                                        'id="xs-injectables-links-module-Pm8Module-3680db022be342de744a5056a83f1a06afc61e88a87079b9f80b68167056b789671ed3b6a23d9d652b19546ed32c756ebfee9d8664a383e6cd7cb7e625bb1d38"' }>
                                        <li class="link">
                                            <a href="injectables/Pm8LaunchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8LaunchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Pm8SignatureModule.html" data-type="entity-link" >Pm8SignatureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Pm8SignatureModule-3066a4f1df99fc96bb16d7f27d3d2d112352eab174be22ff47a640b65bfbe996934d866940cc2ed00509c4c08d4ea7840fc36274896bf125ecb311a04f30063f"' : 'data-bs-target="#xs-injectables-links-module-Pm8SignatureModule-3066a4f1df99fc96bb16d7f27d3d2d112352eab174be22ff47a640b65bfbe996934d866940cc2ed00509c4c08d4ea7840fc36274896bf125ecb311a04f30063f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Pm8SignatureModule-3066a4f1df99fc96bb16d7f27d3d2d112352eab174be22ff47a640b65bfbe996934d866940cc2ed00509c4c08d4ea7840fc36274896bf125ecb311a04f30063f"' :
                                        'id="xs-injectables-links-module-Pm8SignatureModule-3066a4f1df99fc96bb16d7f27d3d2d112352eab174be22ff47a640b65bfbe996934d866940cc2ed00509c4c08d4ea7840fc36274896bf125ecb311a04f30063f"' }>
                                        <li class="link">
                                            <a href="injectables/Pm8SignatureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8SignatureService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8SignatureV1Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8SignatureV1Service</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8SignatureV2Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8SignatureV2Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Pm8WalletModule.html" data-type="entity-link" >Pm8WalletModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Pm8WalletModule-d5d1135dd91e5ef7ad291bc0e725bb4f1adf845857a5011d02eb31fcbd2c80041b7d3765c0490f90522b64d57a8fb0a8e17dc28828842e9c0654571efc05e5b6"' : 'data-bs-target="#xs-injectables-links-module-Pm8WalletModule-d5d1135dd91e5ef7ad291bc0e725bb4f1adf845857a5011d02eb31fcbd2c80041b7d3765c0490f90522b64d57a8fb0a8e17dc28828842e9c0654571efc05e5b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Pm8WalletModule-d5d1135dd91e5ef7ad291bc0e725bb4f1adf845857a5011d02eb31fcbd2c80041b7d3765c0490f90522b64d57a8fb0a8e17dc28828842e9c0654571efc05e5b6"' :
                                        'id="xs-injectables-links-module-Pm8WalletModule-d5d1135dd91e5ef7ad291bc0e725bb4f1adf845857a5011d02eb31fcbd2c80041b7d3765c0490f90522b64d57a8fb0a8e17dc28828842e9c0654571efc05e5b6"' }>
                                        <li class="link">
                                            <a href="injectables/Pm8PlayerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8PlayerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8RtService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8RtService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8TestSessionAction.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8TestSessionAction</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8TransactionBetAction.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8TransactionBetAction</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8TransactionPromoWinAction.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8TransactionPromoWinAction</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8TransactionRefundAction.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8TransactionRefundAction</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8TransactionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8TransactionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8TransactionTournamentWinAction.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8TransactionTournamentWinAction</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8TransactionWinAction.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8TransactionWinAction</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Pm8ValidationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm8ValidationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-e1a9f610bffd88fc89266500b654539470b00e49582495462aa49c8d3234afccc4ba74abfe201eedeba78220afd1888d5fe5cf6e8efce0e4ab01c0c6dcad5025"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-e1a9f610bffd88fc89266500b654539470b00e49582495462aa49c8d3234afccc4ba74abfe201eedeba78220afd1888d5fe5cf6e8efce0e4ab01c0c6dcad5025"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-e1a9f610bffd88fc89266500b654539470b00e49582495462aa49c8d3234afccc4ba74abfe201eedeba78220afd1888d5fe5cf6e8efce0e4ab01c0c6dcad5025"' :
                                        'id="xs-injectables-links-module-PrismaModule-e1a9f610bffd88fc89266500b654539470b00e49582495462aa49c8d3234afccc4ba74abfe201eedeba78220afd1888d5fe5cf6e8efce0e4ab01c0c6dcad5025"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PromoModule.html" data-type="entity-link" >PromoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' : 'data-bs-target="#xs-controllers-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' :
                                            'id="xs-controllers-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' }>
                                            <li class="link">
                                                <a href="controllers/AdminPromoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPromoController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PromoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' : 'data-bs-target="#xs-injectables-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' :
                                        'id="xs-injectables-links-module-PromoModule-ce7947ec63370b52982477f21a0cc78fdefa783ba635c74b4822653e7ddc8d9f07d92910ae1d5fe09bf0420e08b27685d01bcf53472f125d55f25d09fe731b29"' }>
                                        <li class="link">
                                            <a href="injectables/AdminPromoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPromoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PromoEffectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoEffectService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PromoEventHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoEventHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PromoGameWhitelistRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoGameWhitelistRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PromoRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PromoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PromoValidatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoValidatorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserPromoProgressRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPromoProgressRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserPromoRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPromoRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProvablyFairModule.html" data-type="entity-link" >ProvablyFairModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' : 'data-bs-target="#xs-controllers-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' :
                                            'id="xs-controllers-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' }>
                                            <li class="link">
                                                <a href="controllers/ProvablyFairController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvablyFairController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' : 'data-bs-target="#xs-injectables-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' :
                                        'id="xs-injectables-links-module-ProvablyFairModule-655d48ebb1ddcb01ad0272c70f3d5f37c6d0fb0bf72dc36e29959489f4f1459ff867478ab3c9178261b187534a5824d009671281c03afaa29fe4a6c3cf870511"' }>
                                        <li class="link">
                                            <a href="injectables/ProvablyFairRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvablyFairRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProvablyFairService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvablyFairService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RakebackModule.html" data-type="entity-link" >RakebackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' : 'data-bs-target="#xs-controllers-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' :
                                            'id="xs-controllers-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' }>
                                            <li class="link">
                                                <a href="controllers/AdminRakebackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminRakebackController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RakebackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RakebackController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RakebackGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RakebackGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' : 'data-bs-target="#xs-injectables-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' :
                                        'id="xs-injectables-links-module-RakebackModule-fe65aa116175e288321a789321dee88c7fe5654223927b4aa604e153e840df99c8c945b8167e47e907b8dbfa4753e89e49b66328924d4cd9a177fbe970f0c032"' }>
                                        <li class="link">
                                            <a href="injectables/RakebackRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RakebackRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RakebackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RakebackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RakebackModule.html" data-type="entity-link" >RakebackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RakebackModule-2b5f6d2f26edfe16441ed9d3b648b6dfa59ea89c9b4623c9d0bd69826810d63904b9ab74ea549c068a086c2267ff872f4c52e7a69aa157232f17741322763cff-1"' : 'data-bs-target="#xs-controllers-links-module-RakebackModule-2b5f6d2f26edfe16441ed9d3b648b6dfa59ea89c9b4623c9d0bd69826810d63904b9ab74ea549c068a086c2267ff872f4c52e7a69aa157232f17741322763cff-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RakebackModule-2b5f6d2f26edfe16441ed9d3b648b6dfa59ea89c9b4623c9d0bd69826810d63904b9ab74ea549c068a086c2267ff872f4c52e7a69aa157232f17741322763cff-1"' :
                                            'id="xs-controllers-links-module-RakebackModule-2b5f6d2f26edfe16441ed9d3b648b6dfa59ea89c9b4623c9d0bd69826810d63904b9ab74ea549c068a086c2267ff872f4c52e7a69aa157232f17741322763cff-1"' }>
                                            <li class="link">
                                                <a href="controllers/RakebackHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RakebackHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecaptchaModule.html" data-type="entity-link" >RecaptchaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RecaptchaModule-859cdafbcfbf5de4976cc22a79798ab2fc5c4bd7343ad5043a80f4de9d5ac06dea41a4648d4c693ecb610cf17cc10c0d906d56cdc35fe70243e5bc4d6d956cfe"' : 'data-bs-target="#xs-injectables-links-module-RecaptchaModule-859cdafbcfbf5de4976cc22a79798ab2fc5c4bd7343ad5043a80f4de9d5ac06dea41a4648d4c693ecb610cf17cc10c0d906d56cdc35fe70243e5bc4d6d956cfe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RecaptchaModule-859cdafbcfbf5de4976cc22a79798ab2fc5c4bd7343ad5043a80f4de9d5ac06dea41a4648d4c693ecb610cf17cc10c0d906d56cdc35fe70243e5bc4d6d956cfe"' :
                                        'id="xs-injectables-links-module-RecaptchaModule-859cdafbcfbf5de4976cc22a79798ab2fc5c4bd7343ad5043a80f4de9d5ac06dea41a4648d4c693ecb610cf17cc10c0d906d56cdc35fe70243e5bc4d6d956cfe"' }>
                                        <li class="link">
                                            <a href="injectables/GeetestCaptchaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeetestCaptchaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RecaptchaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecaptchaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationInfoModule.html" data-type="entity-link" >RegistrationInfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' : 'data-bs-target="#xs-controllers-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' :
                                            'id="xs-controllers-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' }>
                                            <li class="link">
                                                <a href="controllers/AdminRegistrationInfoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminRegistrationInfoController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RegistrationInfoGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationInfoGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' : 'data-bs-target="#xs-injectables-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' :
                                        'id="xs-injectables-links-module-RegistrationInfoModule-6fe48018308eb86128e1c4d70131d26e0886821adab2751e85e9cdcb3a94b250d168fb7655a3c092fa49a99744d7607536ff67b1444ab479aee72f6c3d2be6f0"' }>
                                        <li class="link">
                                            <a href="injectables/RegistrationInfoRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationInfoRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegistrationInfoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationInfoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationInfoModule.html" data-type="entity-link" >RegistrationInfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RegistrationInfoModule-7f5a65fe0ec3e3f3d574560cb8a10ebdd08f05011323c0db7c0eb49145f5f40505a772e2699b1b9c3bd190eb70d7a06aed3178cd2bd049089ce156f9a4b4adeb-1"' : 'data-bs-target="#xs-controllers-links-module-RegistrationInfoModule-7f5a65fe0ec3e3f3d574560cb8a10ebdd08f05011323c0db7c0eb49145f5f40505a772e2699b1b9c3bd190eb70d7a06aed3178cd2bd049089ce156f9a4b4adeb-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RegistrationInfoModule-7f5a65fe0ec3e3f3d574560cb8a10ebdd08f05011323c0db7c0eb49145f5f40505a772e2699b1b9c3bd190eb70d7a06aed3178cd2bd049089ce156f9a4b4adeb-1"' :
                                            'id="xs-controllers-links-module-RegistrationInfoModule-7f5a65fe0ec3e3f3d574560cb8a10ebdd08f05011323c0db7c0eb49145f5f40505a772e2699b1b9c3bd190eb70d7a06aed3178cd2bd049089ce156f9a4b4adeb-1"' }>
                                            <li class="link">
                                                <a href="controllers/RegistrationInfoHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationInfoHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoryModule.html" data-type="entity-link" >RepositoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RepositoryModule-43417ba729188cd3a6795cc278362ee449193217228a9f857208839290b803d9ff178828fc2a7b02aac42c15a5774d30462b6131264652c62446cec51bb38251"' : 'data-bs-target="#xs-injectables-links-module-RepositoryModule-43417ba729188cd3a6795cc278362ee449193217228a9f857208839290b803d9ff178828fc2a7b02aac42c15a5774d30462b6131264652c62446cec51bb38251"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RepositoryModule-43417ba729188cd3a6795cc278362ee449193217228a9f857208839290b803d9ff178828fc2a7b02aac42c15a5774d30462b6131264652c62446cec51bb38251"' :
                                        'id="xs-injectables-links-module-RepositoryModule-43417ba729188cd3a6795cc278362ee449193217228a9f857208839290b803d9ff178828fc2a7b02aac42c15a5774d30462b6131264652c62446cec51bb38251"' }>
                                        <li class="link">
                                            <a href="injectables/AdminTipsQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTipsQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateActiveReferralsCountQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateActiveReferralsCountQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateAdminTipsQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateAdminTipsQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateClaimedQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateClaimedQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateDepositsQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateDepositsQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateReferralsCountQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateReferralsCountQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateRewardTakenQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateRewardTakenQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AffiliateTotalWithdrawalsQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateTotalWithdrawalsQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BatchAggregationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchAggregationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DashboardRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FirstTimeDepositAmountAndCountQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FirstTimeDepositAmountAndCountQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GamesBetTotalCountAverageQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesBetTotalCountAverageQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GamesChartsQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesChartsQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GgrGamesQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GgrGamesQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GgrQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GgrQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LeaderBoardQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderBoardQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NgrQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgrQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OnlineQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnlineQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfitLossQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfitLossQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProviderGeneralStats.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProviderGeneralStats</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RakeBackProgramQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RakeBackProgramQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReferralFtdQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralFtdQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReferralGgrQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralGgrQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReferralTotalWageredQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralTotalWageredQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserTipsQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTipsQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserTotalBalanceQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTotalBalanceQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserTotalCountQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTotalCountQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserTotalDepositsAndAverageQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTotalDepositsAndAverageQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserTotalSignupQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTotalSignupQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserTotalWageredQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTotalWageredQuery</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserTotalWithdrawalsQuery.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTotalWithdrawalsQuery</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RouletteModule.html" data-type="entity-link" >RouletteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' : 'data-bs-target="#xs-controllers-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' :
                                            'id="xs-controllers-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' }>
                                            <li class="link">
                                                <a href="controllers/RouletteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouletteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' : 'data-bs-target="#xs-injectables-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' :
                                        'id="xs-injectables-links-module-RouletteModule-82e192568bd8efee83585e98dd9a9cb8c153485c83f73a186dcacba65390348d9dd0cc7de166e33ea39a5f86d47b3562f677a08406d7dc4284815389c697d7e2"' }>
                                        <li class="link">
                                            <a href="injectables/RouletteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouletteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionModule.html" data-type="entity-link" >SessionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' : 'data-bs-target="#xs-controllers-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' :
                                            'id="xs-controllers-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' }>
                                            <li class="link">
                                                <a href="controllers/SessionGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' : 'data-bs-target="#xs-injectables-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' :
                                        'id="xs-injectables-links-module-SessionModule-6e451fe82c987de133028b20a0a4bd532a9ea068a38c2da5b516f082f8d771a46d84c453bcad00a6ce72b4c92e2f751942fe810ed4a3ba5a971dfee8af4b075e"' }>
                                        <li class="link">
                                            <a href="injectables/SessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteConfigApiModule.html" data-type="entity-link" >SiteConfigApiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SiteConfigApiModule-d4d17882491d5ca719a5b1f77dbb1f269eeba48dc7517ca0b86fc97d88e0276e116c99608e6678b761661ad15355f99843704757a41cef4730f9db570d1e1b67"' : 'data-bs-target="#xs-controllers-links-module-SiteConfigApiModule-d4d17882491d5ca719a5b1f77dbb1f269eeba48dc7517ca0b86fc97d88e0276e116c99608e6678b761661ad15355f99843704757a41cef4730f9db570d1e1b67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteConfigApiModule-d4d17882491d5ca719a5b1f77dbb1f269eeba48dc7517ca0b86fc97d88e0276e116c99608e6678b761661ad15355f99843704757a41cef4730f9db570d1e1b67"' :
                                            'id="xs-controllers-links-module-SiteConfigApiModule-d4d17882491d5ca719a5b1f77dbb1f269eeba48dc7517ca0b86fc97d88e0276e116c99608e6678b761661ad15355f99843704757a41cef4730f9db570d1e1b67"' }>
                                            <li class="link">
                                                <a href="controllers/AdminSiteConfigController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminSiteConfigController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SiteConfigController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SiteConfigController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SiteConfigGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SiteConfigGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteConfigModule.html" data-type="entity-link" >SiteConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SiteConfigModule-099b580527e90bffa03354c831bea062bdf82a9f24705685fa29aa05198d98934cb2c9729cd084871b8d6f2da8923c8d970166322d82ee8961492db83a428756"' : 'data-bs-target="#xs-controllers-links-module-SiteConfigModule-099b580527e90bffa03354c831bea062bdf82a9f24705685fa29aa05198d98934cb2c9729cd084871b8d6f2da8923c8d970166322d82ee8961492db83a428756"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteConfigModule-099b580527e90bffa03354c831bea062bdf82a9f24705685fa29aa05198d98934cb2c9729cd084871b8d6f2da8923c8d970166322d82ee8961492db83a428756"' :
                                            'id="xs-controllers-links-module-SiteConfigModule-099b580527e90bffa03354c831bea062bdf82a9f24705685fa29aa05198d98934cb2c9729cd084871b8d6f2da8923c8d970166322d82ee8961492db83a428756"' }>
                                            <li class="link">
                                                <a href="controllers/SiteConfigHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SiteConfigHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteConfigModule.html" data-type="entity-link" >SiteConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SiteConfigModule-3a481d2d4ad5fdc274a0b878fded347178004ed003a029c75633b2fc087a5a2b79a2ce6ea52ea707aa1ec973d4fbefd733c9b85a325421504f3044ba6af80fb2-1"' : 'data-bs-target="#xs-injectables-links-module-SiteConfigModule-3a481d2d4ad5fdc274a0b878fded347178004ed003a029c75633b2fc087a5a2b79a2ce6ea52ea707aa1ec973d4fbefd733c9b85a325421504f3044ba6af80fb2-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteConfigModule-3a481d2d4ad5fdc274a0b878fded347178004ed003a029c75633b2fc087a5a2b79a2ce6ea52ea707aa1ec973d4fbefd733c9b85a325421504f3044ba6af80fb2-1"' :
                                        'id="xs-injectables-links-module-SiteConfigModule-3a481d2d4ad5fdc274a0b878fded347178004ed003a029c75633b2fc087a5a2b79a2ce6ea52ea707aa1ec973d4fbefd733c9b85a325421504f3044ba6af80fb2-1"' }>
                                        <li class="link">
                                            <a href="injectables/SiteConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SiteConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SkinDeckModule.html" data-type="entity-link" >SkinDeckModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' : 'data-bs-target="#xs-controllers-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' :
                                            'id="xs-controllers-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' }>
                                            <li class="link">
                                                <a href="controllers/SkinDeckController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkinDeckController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SkinDeckWebhookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkinDeckWebhookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' : 'data-bs-target="#xs-injectables-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' :
                                        'id="xs-injectables-links-module-SkinDeckModule-3a06a4f8cbe4864ac944ff63fdc0b1a67dad649b70a8c8fdff12c38e6f5df7b73cd5476b76a3ce7039d47f312baf019e11bdc9c978657ff8ae88bed132e6906a"' }>
                                        <li class="link">
                                            <a href="injectables/SkinDeckCommonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkinDeckCommonService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SkinDeckDepositsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkinDeckDepositsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SlotGamesModule.html" data-type="entity-link" >SlotGamesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' : 'data-bs-target="#xs-controllers-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' :
                                            'id="xs-controllers-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' }>
                                            <li class="link">
                                                <a href="controllers/AdminSlotGamesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminSlotGamesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SlotGamesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlotGamesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' : 'data-bs-target="#xs-injectables-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' :
                                        'id="xs-injectables-links-module-SlotGamesModule-3225d6202003fd89c2a9b73a6a25146b94259f23145e6057320768fb4fbafa68386135dec5b125a31cc6c8b7d05c61bdf8b6316a6c19edd0461bbb76177baeb8"' }>
                                        <li class="link">
                                            <a href="injectables/SlotGamesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlotGamesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SlotRndGenModule.html" data-type="entity-link" >SlotRndGenModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SlotRndGenModule-3c4c674f9ccd32ec7b72f615c665b09a2270c12d2ef4fd7157e736273a3eb2991cdfd63f20a0134fad1c41849e8f6683b234c15131eaf6ac9022d988272f8039"' : 'data-bs-target="#xs-injectables-links-module-SlotRndGenModule-3c4c674f9ccd32ec7b72f615c665b09a2270c12d2ef4fd7157e736273a3eb2991cdfd63f20a0134fad1c41849e8f6683b234c15131eaf6ac9022d988272f8039"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SlotRndGenModule-3c4c674f9ccd32ec7b72f615c665b09a2270c12d2ef4fd7157e736273a3eb2991cdfd63f20a0134fad1c41849e8f6683b234c15131eaf6ac9022d988272f8039"' :
                                        'id="xs-injectables-links-module-SlotRndGenModule-3c4c674f9ccd32ec7b72f615c665b09a2270c12d2ef4fd7157e736273a3eb2991cdfd63f20a0134fad1c41849e8f6683b234c15131eaf6ac9022d988272f8039"' }>
                                        <li class="link">
                                            <a href="injectables/SlotRndGenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlotRndGenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpeedRouletteApiModule.html" data-type="entity-link" >SpeedRouletteApiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' : 'data-bs-target="#xs-controllers-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' :
                                            'id="xs-controllers-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' }>
                                            <li class="link">
                                                <a href="controllers/SpeedRouletteApiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteApiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' : 'data-bs-target="#xs-injectables-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' :
                                        'id="xs-injectables-links-module-SpeedRouletteApiModule-1922dc61e5b6c33fadb68e053114f994f4855acfcb7df3829d2bdeff08abea02a25cfd77c105b153c88f84258c19c67f9e7b164a66aae263b6124e6c12456899"' }>
                                        <li class="link">
                                            <a href="injectables/SpeedRouletteApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpeedRouletteModule.html" data-type="entity-link" >SpeedRouletteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' : 'data-bs-target="#xs-controllers-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' :
                                            'id="xs-controllers-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' }>
                                            <li class="link">
                                                <a href="controllers/SpeedRouletteGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' : 'data-bs-target="#xs-injectables-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' :
                                        'id="xs-injectables-links-module-SpeedRouletteModule-89d6d62cdd1423ef53aa49d5a2fd193cc3076df5bf0a2dce2ae7e3157312e33f4368c4a9c0ab9042bceae386359fa2fdcdfabc41ea659bec2768f8e20a352230"' }>
                                        <li class="link">
                                            <a href="injectables/SpeedRouletteConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpeedRouletteNotifierService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteNotifierService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpeedRouletteRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpeedRouletteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpeedRouletteStateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeedRouletteStateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SportbookAuthModule.html" data-type="entity-link" >SportbookAuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' : 'data-bs-target="#xs-controllers-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' :
                                            'id="xs-controllers-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' }>
                                            <li class="link">
                                                <a href="controllers/SportbookAuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SportbookAuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' : 'data-bs-target="#xs-injectables-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' :
                                        'id="xs-injectables-links-module-SportbookAuthModule-7b88d2a01103acaf64427937e1b45e501c0413a372f264bf066fe1d33054c389b4bc18aadff184e8e0fc8b80b8fc360284184f0eaa3140e7cc47b5bebce49011"' }>
                                        <li class="link">
                                            <a href="injectables/SportbookAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SportbookAuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SportbookModule.html" data-type="entity-link" >SportbookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' : 'data-bs-target="#xs-controllers-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' :
                                            'id="xs-controllers-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' }>
                                            <li class="link">
                                                <a href="controllers/SportbookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SportbookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' : 'data-bs-target="#xs-injectables-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' :
                                        'id="xs-injectables-links-module-SportbookModule-1d0937003872ce1d7a59197a22af859a83eaff42bd78b45f3d4f9fe69b2df9e9dd3565d5ffd3ce380fa6942fee68c9852a06eb82c8d961ce83f0cc4fdbd528d2"' }>
                                        <li class="link">
                                            <a href="injectables/SportbookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SportbookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SportbookS2SModule.html" data-type="entity-link" >SportbookS2SModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SportbookS2SModule-c05e4b60f35132f31a923a62916ccfc2ab5fbd6f4102394ced4bb11bb92878a7a1990369b3986df2b9e449aa93b76f895764ca966653ce8c034addac5d07ae94"' : 'data-bs-target="#xs-injectables-links-module-SportbookS2SModule-c05e4b60f35132f31a923a62916ccfc2ab5fbd6f4102394ced4bb11bb92878a7a1990369b3986df2b9e449aa93b76f895764ca966653ce8c034addac5d07ae94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SportbookS2SModule-c05e4b60f35132f31a923a62916ccfc2ab5fbd6f4102394ced4bb11bb92878a7a1990369b3986df2b9e449aa93b76f895764ca966653ce8c034addac5d07ae94"' :
                                        'id="xs-injectables-links-module-SportbookS2SModule-c05e4b60f35132f31a923a62916ccfc2ab5fbd6f4102394ced4bb11bb92878a7a1990369b3986df2b9e449aa93b76f895764ca966653ce8c034addac5d07ae94"' }>
                                        <li class="link">
                                            <a href="injectables/SportbookS2sService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SportbookS2sService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SportsbookActionModule.html" data-type="entity-link" >SportsbookActionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SportsbookActionModule-f75afe01ed3f64ba64b3a65bb4bfd868400a1eac4abf22626d76943bf3020f3a3a681f0ff6f99a18f5ff9c5813c001109a7fe5648b04286dc7eefaf031fe5d84"' : 'data-bs-target="#xs-injectables-links-module-SportsbookActionModule-f75afe01ed3f64ba64b3a65bb4bfd868400a1eac4abf22626d76943bf3020f3a3a681f0ff6f99a18f5ff9c5813c001109a7fe5648b04286dc7eefaf031fe5d84"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SportsbookActionModule-f75afe01ed3f64ba64b3a65bb4bfd868400a1eac4abf22626d76943bf3020f3a3a681f0ff6f99a18f5ff9c5813c001109a7fe5648b04286dc7eefaf031fe5d84"' :
                                        'id="xs-injectables-links-module-SportsbookActionModule-f75afe01ed3f64ba64b3a65bb4bfd868400a1eac4abf22626d76943bf3020f3a3a681f0ff6f99a18f5ff9c5813c001109a7fe5648b04286dc7eefaf031fe5d84"' }>
                                        <li class="link">
                                            <a href="injectables/RollbackStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RollbackStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SportsbookTransactionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SportsbookTransactionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransactionStrategyFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionStrategyFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemModule.html" data-type="entity-link" >SystemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SystemModule-a3b0d895a01a9cde5211a1001a9aa72dd959c1d7afc14b90154cf05a634faa6b795989584c9d04ef8e273d51dfdb2dd31dcfce0432af22f16f65d55f8ce94c57"' : 'data-bs-target="#xs-controllers-links-module-SystemModule-a3b0d895a01a9cde5211a1001a9aa72dd959c1d7afc14b90154cf05a634faa6b795989584c9d04ef8e273d51dfdb2dd31dcfce0432af22f16f65d55f8ce94c57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SystemModule-a3b0d895a01a9cde5211a1001a9aa72dd959c1d7afc14b90154cf05a634faa6b795989584c9d04ef8e273d51dfdb2dd31dcfce0432af22f16f65d55f8ce94c57"' :
                                            'id="xs-controllers-links-module-SystemModule-a3b0d895a01a9cde5211a1001a9aa72dd959c1d7afc14b90154cf05a634faa6b795989584c9d04ef8e273d51dfdb2dd31dcfce0432af22f16f65d55f8ce94c57"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemModule.html" data-type="entity-link" >SystemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-1"' : 'data-bs-target="#xs-controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-1"' :
                                            'id="xs-controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-1"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemModule.html" data-type="entity-link" >SystemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SystemModule-15aecbff141241bca81e202f33f2ed6b33bf778d25d754d3476ac2a86f4f4f89f16571f2c073c1e6acc0506aecbbebebc0a1ae792dea3af32e796d8d97b16210-2"' : 'data-bs-target="#xs-controllers-links-module-SystemModule-15aecbff141241bca81e202f33f2ed6b33bf778d25d754d3476ac2a86f4f4f89f16571f2c073c1e6acc0506aecbbebebc0a1ae792dea3af32e796d8d97b16210-2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SystemModule-15aecbff141241bca81e202f33f2ed6b33bf778d25d754d3476ac2a86f4f4f89f16571f2c073c1e6acc0506aecbbebebc0a1ae792dea3af32e796d8d97b16210-2"' :
                                            'id="xs-controllers-links-module-SystemModule-15aecbff141241bca81e202f33f2ed6b33bf778d25d754d3476ac2a86f4f4f89f16571f2c073c1e6acc0506aecbbebebc0a1ae792dea3af32e796d8d97b16210-2"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemModule.html" data-type="entity-link" >SystemModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SystemModule.html" data-type="entity-link" >SystemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-4"' : 'data-bs-target="#xs-controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-4"' :
                                            'id="xs-controllers-links-module-SystemModule-4341556f01707a1b9878f80ea51ce504f6e37c2a1731cb776f00eaf61701341bf489dbdcffb23eb215ef6bd870398f36adaddaeafccd0a55dd0738b4712060f6-4"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TasksModule-a1d6a46d9cfe2c110498dd02ac9174777d0e31b1e4a6c4cf1721456b77bb822364d7daae17701fe89df1773415cf4805830cf3ed46f186c29dfc5c20d625a306"' : 'data-bs-target="#xs-injectables-links-module-TasksModule-a1d6a46d9cfe2c110498dd02ac9174777d0e31b1e4a6c4cf1721456b77bb822364d7daae17701fe89df1773415cf4805830cf3ed46f186c29dfc5c20d625a306"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-a1d6a46d9cfe2c110498dd02ac9174777d0e31b1e4a6c4cf1721456b77bb822364d7daae17701fe89df1773415cf4805830cf3ed46f186c29dfc5c20d625a306"' :
                                        'id="xs-injectables-links-module-TasksModule-a1d6a46d9cfe2c110498dd02ac9174777d0e31b1e4a6c4cf1721456b77bb822364d7daae17701fe89df1773415cf4805830cf3ed46f186c29dfc5c20d625a306"' }>
                                        <li class="link">
                                            <a href="injectables/PromoTasksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromoTasksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TelegramModule.html" data-type="entity-link" >TelegramModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' : 'data-bs-target="#xs-controllers-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' :
                                            'id="xs-controllers-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' }>
                                            <li class="link">
                                                <a href="controllers/TelegramController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelegramController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' : 'data-bs-target="#xs-injectables-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' :
                                        'id="xs-injectables-links-module-TelegramModule-215aeb4530e94aaf494e3a1708186185232943617a6e0ace0ce293a8ea96b2d8edad96ac6e2c9aad4c9c49fe23bd837d3b77738e4996cd587aefcad9c609d14b"' }>
                                        <li class="link">
                                            <a href="injectables/TelegramCallbackActionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelegramCallbackActionsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TelegramNotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelegramNotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TelegramRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelegramRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TelegramService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelegramService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestAccountingModule.html" data-type="entity-link" >TestAccountingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TestAccountingModule-3422508f6184fd99d7d234c53cab9f2497308b22e42e54ec71303873011bac398e71ef5febeeff8e7a0e1d703746dd4196b3e19fb945ed7ad7935f9bac6e8fdb"' : 'data-bs-target="#xs-injectables-links-module-TestAccountingModule-3422508f6184fd99d7d234c53cab9f2497308b22e42e54ec71303873011bac398e71ef5febeeff8e7a0e1d703746dd4196b3e19fb945ed7ad7935f9bac6e8fdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TestAccountingModule-3422508f6184fd99d7d234c53cab9f2497308b22e42e54ec71303873011bac398e71ef5febeeff8e7a0e1d703746dd4196b3e19fb945ed7ad7935f9bac6e8fdb"' :
                                        'id="xs-injectables-links-module-TestAccountingModule-3422508f6184fd99d7d234c53cab9f2497308b22e42e54ec71303873011bac398e71ef5febeeff8e7a0e1d703746dd4196b3e19fb945ed7ad7935f9bac6e8fdb"' }>
                                        <li class="link">
                                            <a href="injectables/AccountingRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccountingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CurrencyRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CurrencyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DepositHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FromVaultHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FromVaultHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToVaultHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToVaultHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserBalanceRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserBalanceRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserBalanceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserBalanceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawHandler</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestExchangeRatesModule.html" data-type="entity-link" >TestExchangeRatesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TestExchangeRatesModule-78366f20a2b013aa176f5d6db18d7a9732a779581375fefee7243114260aefe261c7bb8839dd39c31aab9e1d6d8d872b23ad74664726ee295d7f8f478db36320"' : 'data-bs-target="#xs-injectables-links-module-TestExchangeRatesModule-78366f20a2b013aa176f5d6db18d7a9732a779581375fefee7243114260aefe261c7bb8839dd39c31aab9e1d6d8d872b23ad74664726ee295d7f8f478db36320"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TestExchangeRatesModule-78366f20a2b013aa176f5d6db18d7a9732a779581375fefee7243114260aefe261c7bb8839dd39c31aab9e1d6d8d872b23ad74664726ee295d7f8f478db36320"' :
                                        'id="xs-injectables-links-module-TestExchangeRatesModule-78366f20a2b013aa176f5d6db18d7a9732a779581375fefee7243114260aefe261c7bb8839dd39c31aab9e1d6d8d872b23ad74664726ee295d7f8f478db36320"' }>
                                        <li class="link">
                                            <a href="injectables/ExchangeRatesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExchangeRatesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestModule.html" data-type="entity-link" >TestModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TipsModule.html" data-type="entity-link" >TipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' : 'data-bs-target="#xs-controllers-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' :
                                            'id="xs-controllers-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' }>
                                            <li class="link">
                                                <a href="controllers/AdminTipsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTipsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TipsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' : 'data-bs-target="#xs-injectables-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' :
                                        'id="xs-injectables-links-module-TipsModule-012f81b3c791d804599e59fdc1f42721477601dc605e7dcb730abf35316c581626b5927bac8bee9fb55140aaa48e348b92d937e44086e79e1198fb97c90fb531"' }>
                                        <li class="link">
                                            <a href="injectables/TipsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TipsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TMTStrategyModule.html" data-type="entity-link" >TMTStrategyModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TMTStrategyModule-b3c899eb2ea49ae5e9e6adb82684e98c8e3fef6dd95972b772deed5496ea254193720f28d0559da18dcd42269f3280149baab46bfd8fe401eb859c924101d2c5"' : 'data-bs-target="#xs-injectables-links-module-TMTStrategyModule-b3c899eb2ea49ae5e9e6adb82684e98c8e3fef6dd95972b772deed5496ea254193720f28d0559da18dcd42269f3280149baab46bfd8fe401eb859c924101d2c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TMTStrategyModule-b3c899eb2ea49ae5e9e6adb82684e98c8e3fef6dd95972b772deed5496ea254193720f28d0559da18dcd42269f3280149baab46bfd8fe401eb859c924101d2c5"' :
                                        'id="xs-injectables-links-module-TMTStrategyModule-b3c899eb2ea49ae5e9e6adb82684e98c8e3fef6dd95972b772deed5496ea254193720f28d0559da18dcd42269f3280149baab46bfd8fe401eb859c924101d2c5"' }>
                                        <li class="link">
                                            <a href="injectables/TmtDataApi.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TmtDataApi</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TmtDepositsStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TmtDepositsStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TmtRegistrationStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TmtRegistrationStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrafficArbitrageRepositoryModule.html" data-type="entity-link" >TrafficArbitrageRepositoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TrafficArbitrageRepositoryModule-bb754ff0645ea4936e8e6c7505f725a5b46a0fc73a03869d6a56d3b34241465d3333b833972d6f108a559653d5de0a8940839300eb328b47a011f4fbd88e82ed"' : 'data-bs-target="#xs-injectables-links-module-TrafficArbitrageRepositoryModule-bb754ff0645ea4936e8e6c7505f725a5b46a0fc73a03869d6a56d3b34241465d3333b833972d6f108a559653d5de0a8940839300eb328b47a011f4fbd88e82ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TrafficArbitrageRepositoryModule-bb754ff0645ea4936e8e6c7505f725a5b46a0fc73a03869d6a56d3b34241465d3333b833972d6f108a559653d5de0a8940839300eb328b47a011f4fbd88e82ed"' :
                                        'id="xs-injectables-links-module-TrafficArbitrageRepositoryModule-bb754ff0645ea4936e8e6c7505f725a5b46a0fc73a03869d6a56d3b34241465d3333b833972d6f108a559653d5de0a8940839300eb328b47a011f4fbd88e82ed"' }>
                                        <li class="link">
                                            <a href="injectables/TrafficArbitrageRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrafficArbitrageRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserLimitsModule.html" data-type="entity-link" >UserLimitsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserLimitsModule-96ee08ecce63742a788140712d386d0a00d9cc23650b8430e3f9e87dbaaf7a1d48eedfd8de86447882d28696a2d5fc60821782faa120719273366a251838d96c"' : 'data-bs-target="#xs-controllers-links-module-UserLimitsModule-96ee08ecce63742a788140712d386d0a00d9cc23650b8430e3f9e87dbaaf7a1d48eedfd8de86447882d28696a2d5fc60821782faa120719273366a251838d96c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserLimitsModule-96ee08ecce63742a788140712d386d0a00d9cc23650b8430e3f9e87dbaaf7a1d48eedfd8de86447882d28696a2d5fc60821782faa120719273366a251838d96c"' :
                                            'id="xs-controllers-links-module-UserLimitsModule-96ee08ecce63742a788140712d386d0a00d9cc23650b8430e3f9e87dbaaf7a1d48eedfd8de86447882d28696a2d5fc60821782faa120719273366a251838d96c"' }>
                                            <li class="link">
                                                <a href="controllers/UserLimitsHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLimitsHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' : 'data-bs-target="#xs-controllers-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' :
                                            'id="xs-controllers-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' }>
                                            <li class="link">
                                                <a href="controllers/AdminNotesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminNotesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AdminUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminUserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' : 'data-bs-target="#xs-injectables-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' :
                                        'id="xs-injectables-links-module-UserModule-86eb743f8125736dc1cc9073bef3432d2aed6f72817a1b0b7e2247b23a5906d214712575fe7b432939b3bd6b4206602041a91c795ecdc17bc308fbe2737f28d9"' }>
                                        <li class="link">
                                            <a href="injectables/NotesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OnlineTrackerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnlineTrackerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileNotifierService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileNotifierService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-c93e15621ad8dd453036980e7141c57f0b38d4d57ef859ac605998f724758d8d44a5b560eb6124d019643030bb39cb67888e78111dc8acb9b6b646d92bf5beec-1"' : 'data-bs-target="#xs-injectables-links-module-UserModule-c93e15621ad8dd453036980e7141c57f0b38d4d57ef859ac605998f724758d8d44a5b560eb6124d019643030bb39cb67888e78111dc8acb9b6b646d92bf5beec-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-c93e15621ad8dd453036980e7141c57f0b38d4d57ef859ac605998f724758d8d44a5b560eb6124d019643030bb39cb67888e78111dc8acb9b6b646d92bf5beec-1"' :
                                        'id="xs-injectables-links-module-UserModule-c93e15621ad8dd453036980e7141c57f0b38d4d57ef859ac605998f724758d8d44a5b560eb6124d019643030bb39cb67888e78111dc8acb9b6b646d92bf5beec-1"' }>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-3ed0cf75351aad32c53fe700d1357993f52b8024bec656b052b9161607ee158984a377a932dd039497dfde4108edcfc4c37ae92b96e3266d9c3338036cdf8933-2"' : 'data-bs-target="#xs-controllers-links-module-UserModule-3ed0cf75351aad32c53fe700d1357993f52b8024bec656b052b9161607ee158984a377a932dd039497dfde4108edcfc4c37ae92b96e3266d9c3338036cdf8933-2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-3ed0cf75351aad32c53fe700d1357993f52b8024bec656b052b9161607ee158984a377a932dd039497dfde4108edcfc4c37ae92b96e3266d9c3338036cdf8933-2"' :
                                            'id="xs-controllers-links-module-UserModule-3ed0cf75351aad32c53fe700d1357993f52b8024bec656b052b9161607ee158984a377a932dd039497dfde4108edcfc4c37ae92b96e3266d9c3338036cdf8933-2"' }>
                                            <li class="link">
                                                <a href="controllers/UserHttpController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserHttpController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-95b22c7169e79f75f0751ad3c7037426905e579f5e7c6e5eeb21c4630007ac7788f18bed99afb21aa2f727ed19ba378532bd157265d4cb000fa0e26052b2ffbb-3"' : 'data-bs-target="#xs-injectables-links-module-UserModule-95b22c7169e79f75f0751ad3c7037426905e579f5e7c6e5eeb21c4630007ac7788f18bed99afb21aa2f727ed19ba378532bd157265d4cb000fa0e26052b2ffbb-3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-95b22c7169e79f75f0751ad3c7037426905e579f5e7c6e5eeb21c4630007ac7788f18bed99afb21aa2f727ed19ba378532bd157265d4cb000fa0e26052b2ffbb-3"' :
                                        'id="xs-injectables-links-module-UserModule-95b22c7169e79f75f0751ad3c7037426905e579f5e7c6e5eeb21c4630007ac7788f18bed99afb21aa2f727ed19ba378532bd157265d4cb000fa0e26052b2ffbb-3"' }>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersLimitsModule.html" data-type="entity-link" >UsersLimitsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' : 'data-bs-target="#xs-controllers-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' :
                                            'id="xs-controllers-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' }>
                                            <li class="link">
                                                <a href="controllers/AdminSelfExcludeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminSelfExcludeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserLimitsGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLimitsGatewayController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersLimitsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersLimitsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' : 'data-bs-target="#xs-injectables-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' :
                                        'id="xs-injectables-links-module-UsersLimitsModule-0fed3e0e6d4d453284a3ddcc05c7a18d372a3a2689e9b59deb33a475f1b2d7b7fd688404d3a9919c5169598fe5c58a3337b3c814baf032abbd6805f8547948ce"' }>
                                        <li class="link">
                                            <a href="injectables/AdminGamblingLimitsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminGamblingLimitsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AdminSelfExclusionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminSelfExclusionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GamblingLimitsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamblingLimitsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GamblingLimitsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamblingLimitsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfExcludeRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfExcludeRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfExclusionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfExclusionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserLimitService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLimitService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserStatsModule.html" data-type="entity-link" >UserStatsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserStatsModule-9e743dfedb15b0824be522c41b220f2f2840d9b9d665f6f3bac01b30398657634c34f74f20098540ad4ae887963cf6853f75a2d61df5f62abfaea75281d730f6"' : 'data-bs-target="#xs-injectables-links-module-UserStatsModule-9e743dfedb15b0824be522c41b220f2f2840d9b9d665f6f3bac01b30398657634c34f74f20098540ad4ae887963cf6853f75a2d61df5f62abfaea75281d730f6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserStatsModule-9e743dfedb15b0824be522c41b220f2f2840d9b9d665f6f3bac01b30398657634c34f74f20098540ad4ae887963cf6853f75a2d61df5f62abfaea75281d730f6"' :
                                        'id="xs-injectables-links-module-UserStatsModule-9e743dfedb15b0824be522c41b220f2f2840d9b9d665f6f3bac01b30398657634c34f74f20098540ad4ae887963cf6853f75a2d61df5f62abfaea75281d730f6"' }>
                                        <li class="link">
                                            <a href="injectables/UserStatsMigrateQueueProcessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsMigrateQueueProcessor</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsMigrateQueueProducer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsMigrateQueueProducer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsMigrateRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsMigrateRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsMigrateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsMigrateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsQueueProcessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsQueueProcessor</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsQueueProducer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsQueueProducer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsUsdRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsUsdRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserStatsUsdService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatsUsdService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VipProgramModule.html" data-type="entity-link" >VipProgramModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' : 'data-bs-target="#xs-controllers-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' :
                                            'id="xs-controllers-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' }>
                                            <li class="link">
                                                <a href="controllers/VipApplicationAdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VipApplicationAdminController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/VipApplicationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VipApplicationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' : 'data-bs-target="#xs-injectables-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' :
                                        'id="xs-injectables-links-module-VipProgramModule-54fbbae7bd48a3dd25ea8146df2f02431c1caa86d7e2dcbc98e7c8f0d195d75da10591ead8ae715ae8b1b832677ef5ceb076bf858222be1e7071f533612ae671"' }>
                                        <li class="link">
                                            <a href="injectables/VipApplicationAdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VipApplicationAdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VipApplicationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VipApplicationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VipProgramRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VipProgramRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WalletModule.html" data-type="entity-link" >WalletModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WalletModule-2e59600a809c3db21ddb5661f5ac2562d3fb9d02691405037fd0f5dd621b6e4c1faaf1e2e2959d8550b133d4b1992c4637816edda56f27196fdf9164d4e1e5a2"' : 'data-bs-target="#xs-injectables-links-module-WalletModule-2e59600a809c3db21ddb5661f5ac2562d3fb9d02691405037fd0f5dd621b6e4c1faaf1e2e2959d8550b133d4b1992c4637816edda56f27196fdf9164d4e1e5a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WalletModule-2e59600a809c3db21ddb5661f5ac2562d3fb9d02691405037fd0f5dd621b6e4c1faaf1e2e2959d8550b133d4b1992c4637816edda56f27196fdf9164d4e1e5a2"' :
                                        'id="xs-injectables-links-module-WalletModule-2e59600a809c3db21ddb5661f5ac2562d3fb9d02691405037fd0f5dd621b6e4c1faaf1e2e2959d8550b133d4b1992c4637816edda56f27196fdf9164d4e1e5a2"' }>
                                        <li class="link">
                                            <a href="injectables/WalletRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WalletService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WithdrawalsBlockModule.html" data-type="entity-link" >WithdrawalsBlockModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' : 'data-bs-target="#xs-controllers-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' :
                                            'id="xs-controllers-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' }>
                                            <li class="link">
                                                <a href="controllers/AdminWithdrawalsBlockController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminWithdrawalsBlockController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' : 'data-bs-target="#xs-injectables-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' :
                                        'id="xs-injectables-links-module-WithdrawalsBlockModule-141dbe6c3b789b751c2bf95fdf7ff5a7ff303b7dcfdb7bf0cb31906549c79a6368f2800c68994b362b2e2135901edf066d014e13c945cc14215bc82e393fecd6"' }>
                                        <li class="link">
                                            <a href="injectables/WithdrawalsBlockRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalsBlockRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawalsBlockService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalsBlockService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WithdrawalStrategyModule.html" data-type="entity-link" >WithdrawalStrategyModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WithdrawalStrategyModule-074ab0aec7851c950a874b08eea9cf420a6a16b22c64acb1f0acaa5d61a785400d2f8706145830d51bcc665a46238897f4530e77ad7aff277b7bae67ca95be58"' : 'data-bs-target="#xs-injectables-links-module-WithdrawalStrategyModule-074ab0aec7851c950a874b08eea9cf420a6a16b22c64acb1f0acaa5d61a785400d2f8706145830d51bcc665a46238897f4530e77ad7aff277b7bae67ca95be58"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WithdrawalStrategyModule-074ab0aec7851c950a874b08eea9cf420a6a16b22c64acb1f0acaa5d61a785400d2f8706145830d51bcc665a46238897f4530e77ad7aff277b7bae67ca95be58"' :
                                        'id="xs-injectables-links-module-WithdrawalStrategyModule-074ab0aec7851c950a874b08eea9cf420a6a16b22c64acb1f0acaa5d61a785400d2f8706145830d51bcc665a46238897f4530e77ad7aff277b7bae67ca95be58"' }>
                                        <li class="link">
                                            <a href="injectables/WithdrawalCancelSettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalCancelSettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawalCreateBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalCreateBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawalPartialCancelSettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalPartialCancelSettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawalPartialResettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalPartialResettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawalResettleBetStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalResettleBetStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawalStrategyFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawalStrategyFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WithdrawModule.html" data-type="entity-link" >WithdrawModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' : 'data-bs-target="#xs-controllers-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' :
                                            'id="xs-controllers-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' }>
                                            <li class="link">
                                                <a href="controllers/AdminWithdrawController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminWithdrawController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WithdrawController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WithdrawGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' : 'data-bs-target="#xs-injectables-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' :
                                        'id="xs-injectables-links-module-WithdrawModule-b32430d6f122d5bf56f56dd0da3515a64ca3736c099a13c5c795b6fa78593c79b2e67261c1543dd72092c12de100aab598166dea1c103c599fece4b78515ec4b"' }>
                                        <li class="link">
                                            <a href="injectables/WithdrawCheckService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawCheckService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WithdrawService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WsThrottlerModule.html" data-type="entity-link" >WsThrottlerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WsThrottlerModule-566435ce289cf25688643ed298b1ad2b4731f216b5e71d4d18c408d6f867675ecd6cfdbd1324177eba38277045325d4699fef67989af5ccdc754ce8db07e328e"' : 'data-bs-target="#xs-injectables-links-module-WsThrottlerModule-566435ce289cf25688643ed298b1ad2b4731f216b5e71d4d18c408d6f867675ecd6cfdbd1324177eba38277045325d4699fef67989af5ccdc754ce8db07e328e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WsThrottlerModule-566435ce289cf25688643ed298b1ad2b4731f216b5e71d4d18c408d6f867675ecd6cfdbd1324177eba38277045325d4699fef67989af5ccdc754ce8db07e328e"' :
                                        'id="xs-injectables-links-module-WsThrottlerModule-566435ce289cf25688643ed298b1ad2b4731f216b5e71d4d18c408d6f867675ecd6cfdbd1324177eba38277045325d4699fef67989af5ccdc754ce8db07e328e"' }>
                                        <li class="link">
                                            <a href="injectables/WsThrottlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WsThrottlerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/XMRStrategyModule.html" data-type="entity-link" >XMRStrategyModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-XMRStrategyModule-865ae1c2f1b75e907e7f9167fa8b340ebd2348d94c14f537cc263ef471237abfaf63005f881d80168b69d443a8a7cbf7d54896ed1aae3fe34c88deaa0e260580"' : 'data-bs-target="#xs-injectables-links-module-XMRStrategyModule-865ae1c2f1b75e907e7f9167fa8b340ebd2348d94c14f537cc263ef471237abfaf63005f881d80168b69d443a8a7cbf7d54896ed1aae3fe34c88deaa0e260580"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-XMRStrategyModule-865ae1c2f1b75e907e7f9167fa8b340ebd2348d94c14f537cc263ef471237abfaf63005f881d80168b69d443a8a7cbf7d54896ed1aae3fe34c88deaa0e260580"' :
                                        'id="xs-injectables-links-module-XMRStrategyModule-865ae1c2f1b75e907e7f9167fa8b340ebd2348d94c14f537cc263ef471237abfaf63005f881d80168b69d443a8a7cbf7d54896ed1aae3fe34c88deaa0e260580"' }>
                                        <li class="link">
                                            <a href="injectables/XmrDataApi.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >XmrDataApi</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/XmrDepositsStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >XmrDepositsStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/XmrRegistrationStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >XmrRegistrationStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccountingController.html" data-type="entity-link" >AccountingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AccountingGatewayController.html" data-type="entity-link" >AccountingGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AccountingHttpController.html" data-type="entity-link" >AccountingHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminAccountingController.html" data-type="entity-link" >AdminAccountingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminAdminTipsController.html" data-type="entity-link" >AdminAdminTipsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminAffiliateCodeController.html" data-type="entity-link" >AdminAffiliateCodeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminAffiliateController.html" data-type="entity-link" >AdminAffiliateController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminAffiliateStreamerController.html" data-type="entity-link" >AdminAffiliateStreamerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminApiKeyController.html" data-type="entity-link" >AdminApiKeyController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminBetController.html" data-type="entity-link" >AdminBetController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminBetQueueController.html" data-type="entity-link" >AdminBetQueueController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminChallengeController.html" data-type="entity-link" >AdminChallengeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminChatController.html" data-type="entity-link" >AdminChatController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminDashboardCombinedController.html" data-type="entity-link" >AdminDashboardCombinedController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminDashboardController.html" data-type="entity-link" >AdminDashboardController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminDashboardSeparatedController.html" data-type="entity-link" >AdminDashboardSeparatedController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminDepositController.html" data-type="entity-link" >AdminDepositController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminFaqController.html" data-type="entity-link" >AdminFaqController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminKycController.html" data-type="entity-link" >AdminKycController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminLeaderboardController.html" data-type="entity-link" >AdminLeaderboardController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminNotesController.html" data-type="entity-link" >AdminNotesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminPromoController.html" data-type="entity-link" >AdminPromoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminRakebackController.html" data-type="entity-link" >AdminRakebackController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminRegistrationInfoController.html" data-type="entity-link" >AdminRegistrationInfoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminSelfExcludeController.html" data-type="entity-link" >AdminSelfExcludeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminSiteConfigController.html" data-type="entity-link" >AdminSiteConfigController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminSlotGamesController.html" data-type="entity-link" >AdminSlotGamesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminTipsController.html" data-type="entity-link" >AdminTipsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminTipsController-1.html" data-type="entity-link" >AdminTipsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminTipsGatewayController.html" data-type="entity-link" >AdminTipsGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminTipsHttpController.html" data-type="entity-link" >AdminTipsHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminUserController.html" data-type="entity-link" >AdminUserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminWithdrawalsBlockController.html" data-type="entity-link" >AdminWithdrawalsBlockController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AdminWithdrawController.html" data-type="entity-link" >AdminWithdrawController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AffiliateCodeController.html" data-type="entity-link" >AffiliateCodeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AffiliateController.html" data-type="entity-link" >AffiliateController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AffiliateExternalController.html" data-type="entity-link" >AffiliateExternalController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AffiliateGatewayController.html" data-type="entity-link" >AffiliateGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AffiliateHttpController.html" data-type="entity-link" >AffiliateHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ApiKeyGatewayController.html" data-type="entity-link" >ApiKeyGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ApiKeyHttpController.html" data-type="entity-link" >ApiKeyHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BetController.html" data-type="entity-link" >BetController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BetHttpController.html" data-type="entity-link" >BetHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BGamingDevProxyController.html" data-type="entity-link" >BGamingDevProxyController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BGamingWalletController.html" data-type="entity-link" >BGamingWalletController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BlackjackController.html" data-type="entity-link" >BlackjackController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BlackjackGatewayController.html" data-type="entity-link" >BlackjackGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BlackjackHttpController.html" data-type="entity-link" >BlackjackHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BlackjackSocketController.html" data-type="entity-link" >BlackjackSocketController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BotActivityController.html" data-type="entity-link" >BotActivityController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CCPaymentWebhookController.html" data-type="entity-link" >CCPaymentWebhookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ChallengeController.html" data-type="entity-link" >ChallengeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ChatController.html" data-type="entity-link" >ChatController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ChatGatewayController.html" data-type="entity-link" >ChatGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ChatHttpController.html" data-type="entity-link" >ChatHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ComingSoonController.html" data-type="entity-link" >ComingSoonController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountryController.html" data-type="entity-link" >CountryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountryController-1.html" data-type="entity-link" >CountryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CurrencyController.html" data-type="entity-link" >CurrencyController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DebugController.html" data-type="entity-link" >DebugController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DepositController.html" data-type="entity-link" >DepositController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DepositGatewayController.html" data-type="entity-link" >DepositGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DepositHttpController.html" data-type="entity-link" >DepositHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DiceController.html" data-type="entity-link" >DiceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventsController.html" data-type="entity-link" >EventsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EvoGamesWalletGatewayController.html" data-type="entity-link" >EvoGamesWalletGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ExchangeRatesController.html" data-type="entity-link" >ExchangeRatesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FaqController.html" data-type="entity-link" >FaqController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FaqGatewayController.html" data-type="entity-link" >FaqGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FaqHttpController.html" data-type="entity-link" >FaqHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FastTrackAuthController.html" data-type="entity-link" >FastTrackAuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FastTrackController.html" data-type="entity-link" >FastTrackController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FastTrackDebugController.html" data-type="entity-link" >FastTrackDebugController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FastTrackDebugMessageConsumer.html" data-type="entity-link" >FastTrackDebugMessageConsumer</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FeatureFlagController.html" data-type="entity-link" >FeatureFlagController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GamesAdminController.html" data-type="entity-link" >GamesAdminController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GamesController.html" data-type="entity-link" >GamesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GatewayController.html" data-type="entity-link" >GatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GeoController.html" data-type="entity-link" >GeoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController-1.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController-2.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController-3.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController-4.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/KenoController.html" data-type="entity-link" >KenoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/KycController.html" data-type="entity-link" >KycController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/KycWebhookController.html" data-type="entity-link" >KycWebhookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LeaderboardController.html" data-type="entity-link" >LeaderboardController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LeaderboardGatewayController.html" data-type="entity-link" >LeaderboardGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LeaderboardHttpController.html" data-type="entity-link" >LeaderboardHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LimboController.html" data-type="entity-link" >LimboController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LiveBetsController.html" data-type="entity-link" >LiveBetsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoggerController.html" data-type="entity-link" >LoggerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MinesController.html" data-type="entity-link" >MinesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MonkeyRunController.html" data-type="entity-link" >MonkeyRunController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NetworkController.html" data-type="entity-link" >NetworkController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotificationController.html" data-type="entity-link" >NotificationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NowpaymentsWebhookController.html" data-type="entity-link" >NowpaymentsWebhookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PlinkoController.html" data-type="entity-link" >PlinkoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/Pm8Controller.html" data-type="entity-link" >Pm8Controller</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PM8DevProxyController.html" data-type="entity-link" >PM8DevProxyController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/Pm8WalletPlayerController.html" data-type="entity-link" >Pm8WalletPlayerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/Pm8WalletTransactionsController.html" data-type="entity-link" >Pm8WalletTransactionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PromoController.html" data-type="entity-link" >PromoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProvablyFairController.html" data-type="entity-link" >ProvablyFairController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RakebackController.html" data-type="entity-link" >RakebackController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RakebackGatewayController.html" data-type="entity-link" >RakebackGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RakebackHttpController.html" data-type="entity-link" >RakebackHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RegistrationInfoGatewayController.html" data-type="entity-link" >RegistrationInfoGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RegistrationInfoHttpController.html" data-type="entity-link" >RegistrationInfoHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RouletteController.html" data-type="entity-link" >RouletteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SessionController.html" data-type="entity-link" >SessionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SessionGatewayController.html" data-type="entity-link" >SessionGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SiteConfigController.html" data-type="entity-link" >SiteConfigController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SiteConfigGatewayController.html" data-type="entity-link" >SiteConfigGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SiteConfigHttpController.html" data-type="entity-link" >SiteConfigHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SkinDeckController.html" data-type="entity-link" >SkinDeckController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SkinDeckWebhookController.html" data-type="entity-link" >SkinDeckWebhookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SlotGamesController.html" data-type="entity-link" >SlotGamesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SpeedRouletteApiController.html" data-type="entity-link" >SpeedRouletteApiController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SpeedRouletteGatewayController.html" data-type="entity-link" >SpeedRouletteGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SportbookAuthController.html" data-type="entity-link" >SportbookAuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SportbookController.html" data-type="entity-link" >SportbookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TelegramController.html" data-type="entity-link" >TelegramController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TipsController.html" data-type="entity-link" >TipsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TrafficArbitrageController.html" data-type="entity-link" >TrafficArbitrageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserGatewayController.html" data-type="entity-link" >UserGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserHttpController.html" data-type="entity-link" >UserHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserLimitsGatewayController.html" data-type="entity-link" >UserLimitsGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserLimitsHttpController.html" data-type="entity-link" >UserLimitsHttpController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersLimitsController.html" data-type="entity-link" >UsersLimitsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VipApplicationAdminController.html" data-type="entity-link" >VipApplicationAdminController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VipApplicationController.html" data-type="entity-link" >VipApplicationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/WithdrawController.html" data-type="entity-link" >WithdrawController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/WithdrawGatewayController.html" data-type="entity-link" >WithdrawGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/WithdrawHttpController.html" data-type="entity-link" >WithdrawHttpController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessTokenDto.html" data-type="entity-link" >AccessTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccessTokenPayload.html" data-type="entity-link" >AccessTokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/ActivePlayersMetrics.html" data-type="entity-link" >ActivePlayersMetrics</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminAffiliateDto.html" data-type="entity-link" >AdminAffiliateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminAffiliateUserDto.html" data-type="entity-link" >AdminAffiliateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminAffiliateUsersAggregatedStatsDto.html" data-type="entity-link" >AdminAffiliateUsersAggregatedStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminDeletePromoCodeDto.html" data-type="entity-link" >AdminDeletePromoCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminFindManyTipQueryDto.html" data-type="entity-link" >AdminFindManyTipQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminLogCreateDto.html" data-type="entity-link" >AdminLogCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminLogResponseDto.html" data-type="entity-link" >AdminLogResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminRakebackClaimableUsdDto.html" data-type="entity-link" >AdminRakebackClaimableUsdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminRakebackDto.html" data-type="entity-link" >AdminRakebackDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminTipsDto.html" data-type="entity-link" >AdminTipsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminTipsUserDto.html" data-type="entity-link" >AdminTipsUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminUserGamblingLimits.html" data-type="entity-link" >AdminUserGamblingLimits</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminUserSelfExclude.html" data-type="entity-link" >AdminUserSelfExclude</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminUsersStatsDto.html" data-type="entity-link" >AdminUsersStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateCodeCreateRequestDto.html" data-type="entity-link" >AffiliateCodeCreateRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateCodeDto.html" data-type="entity-link" >AffiliateCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateDto.html" data-type="entity-link" >AffiliateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateExternalReferralInfo.html" data-type="entity-link" >AffiliateExternalReferralInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateLevel.html" data-type="entity-link" >AffiliateLevel</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateLevelDto.html" data-type="entity-link" >AffiliateLevelDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateOverviewDto.html" data-type="entity-link" >AffiliateOverviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateStatsRequest.html" data-type="entity-link" >AffiliateStatsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateStreamerDto.html" data-type="entity-link" >AffiliateStreamerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateStreamerReferralDto.html" data-type="entity-link" >AffiliateStreamerReferralDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateStreamerReferralsStatsDto.html" data-type="entity-link" >AffiliateStreamerReferralsStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateStreamerReferralWhere.html" data-type="entity-link" >AffiliateStreamerReferralWhere</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateStreamerReferralWhereAffiliateCode.html" data-type="entity-link" >AffiliateStreamerReferralWhereAffiliateCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateStreamerShortDto.html" data-type="entity-link" >AffiliateStreamerShortDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateUserDto.html" data-type="entity-link" >AffiliateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateUserStatsDto.html" data-type="entity-link" >AffiliateUserStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateUserStatsUsdDto.html" data-type="entity-link" >AffiliateUserStatsUsdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateUserStatsUtils.html" data-type="entity-link" >AffiliateUserStatsUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateUtils.html" data-type="entity-link" >AffiliateUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/AgeValidator.html" data-type="entity-link" >AgeValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggField.html" data-type="entity-link" >AggField</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateBetsQuery.html" data-type="entity-link" >AggregateBetsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmountBalanceDto.html" data-type="entity-link" >AmountBalanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmountCryptoDto.html" data-type="entity-link" >AmountCryptoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmountDto.html" data-type="entity-link" >AmountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnyRestrictionDto.html" data-type="entity-link" >AnyRestrictionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiException.html" data-type="entity-link" >ApiException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiKeyDto.html" data-type="entity-link" >ApiKeyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiKeyResponse.html" data-type="entity-link" >ApiKeyResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiKeyStrategy.html" data-type="entity-link" >ApiKeyStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplicationReviewResult.html" data-type="entity-link" >ApplicationReviewResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthCheckResult.html" data-type="entity-link" >AuthCheckResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthSessionCache.html" data-type="entity-link" >AuthSessionCache</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthSessionTokenDto.html" data-type="entity-link" >AuthSessionTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthSessionTokens.html" data-type="entity-link" >AuthSessionTokens</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvailableCurrencyNetworksDto.html" data-type="entity-link" >AvailableCurrencyNetworksDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvailableGamesRequest.html" data-type="entity-link" >AvailableGamesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvailableGamesRequest-1.html" data-type="entity-link" >AvailableGamesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvailableGamesResponse.html" data-type="entity-link" >AvailableGamesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvailableGamesResponse-1.html" data-type="entity-link" >AvailableGamesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvailableNetworkProviderAliasDto.html" data-type="entity-link" >AvailableNetworkProviderAliasDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvailableNetworksDto.html" data-type="entity-link" >AvailableNetworksDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AwardWinnerRequestDto.html" data-type="entity-link" >AwardWinnerRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BalanceAmountDto.html" data-type="entity-link" >BalanceAmountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BalanceChangeVaultAmountDto.html" data-type="entity-link" >BalanceChangeVaultAmountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BalanceQuery.html" data-type="entity-link" >BalanceQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseBetRequestDto.html" data-type="entity-link" >BaseBetRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseBetResponseDto.html" data-type="entity-link" >BaseBetResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BasePaginatedDto.html" data-type="entity-link" >BasePaginatedDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSetupUsernameJwtPayload.html" data-type="entity-link" >BaseSetupUsernameJwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseStatsRequest.html" data-type="entity-link" >BaseStatsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseUserNoteDto.html" data-type="entity-link" >BaseUserNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseWindowIdDto.html" data-type="entity-link" >BaseWindowIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BasicSlotGameBet.html" data-type="entity-link" >BasicSlotGameBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bet.html" data-type="entity-link" >Bet</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetBlackjackDebugRequest.html" data-type="entity-link" >BetBlackjackDebugRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetBlackjackRequest.html" data-type="entity-link" >BetBlackjackRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetDto.html" data-type="entity-link" >BetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetDto-1.html" data-type="entity-link" >BetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetHelper.html" data-type="entity-link" >BetHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetInfoDto.html" data-type="entity-link" >BetInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetInfoGame.html" data-type="entity-link" >BetInfoGame</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetInfoQuery.html" data-type="entity-link" >BetInfoQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetNotFoundException.html" data-type="entity-link" >BetNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetProcessor.html" data-type="entity-link" >BetProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetPublicDto.html" data-type="entity-link" >BetPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetQueueProcessor.html" data-type="entity-link" >BetQueueProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetQueueProcessor-1.html" data-type="entity-link" >BetQueueProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetSettledJobData.html" data-type="entity-link" >BetSettledJobData</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetsFilterDto.html" data-type="entity-link" >BetsFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetShortDto.html" data-type="entity-link" >BetShortDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BetUserIdentity.html" data-type="entity-link" >BetUserIdentity</a>
                            </li>
                            <li class="link">
                                <a href="classes/BGamingException.html" data-type="entity-link" >BGamingException</a>
                            </li>
                            <li class="link">
                                <a href="classes/BGamingExceptionFilter.html" data-type="entity-link" >BGamingExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BGamingSlotGameInfo.html" data-type="entity-link" >BGamingSlotGameInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackActiveStateResponse.html" data-type="entity-link" >BlackjackActiveStateResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackBaseHandModel.html" data-type="entity-link" >BlackjackBaseHandModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackDeck.html" data-type="entity-link" >BlackjackDeck</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackGameConfigDto.html" data-type="entity-link" >BlackjackGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackGameDto.html" data-type="entity-link" >BlackjackGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackGameModel.html" data-type="entity-link" >BlackjackGameModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackGamePayload.html" data-type="entity-link" >BlackjackGamePayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackJackGameSettings.html" data-type="entity-link" >BlackJackGameSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackHandValues.html" data-type="entity-link" >BlackjackHandValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackHandValues-1.html" data-type="entity-link" >BlackjackHandValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackPayloadDto.html" data-type="entity-link" >BlackjackPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackProvablyFairSeedModel.html" data-type="entity-link" >BlackjackProvablyFairSeedModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackSideBet.html" data-type="entity-link" >BlackjackSideBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackSideBetDto.html" data-type="entity-link" >BlackjackSideBetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackStateDto.html" data-type="entity-link" >BlackjackStateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackTableShortenedModel.html" data-type="entity-link" >BlackjackTableShortenedModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackUpdateGameSettingsDto.html" data-type="entity-link" >BlackjackUpdateGameSettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlackjackUserDto.html" data-type="entity-link" >BlackjackUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BombsCountValidator.html" data-type="entity-link" >BombsCountValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/BotBetDto.html" data-type="entity-link" >BotBetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BotGameDto.html" data-type="entity-link" >BotGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BotSessionSchema.html" data-type="entity-link" >BotSessionSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/BotUserDto.html" data-type="entity-link" >BotUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BucketFileDto.html" data-type="entity-link" >BucketFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CashbackUtils.html" data-type="entity-link" >CashbackUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentActivateWebhookURLDto.html" data-type="entity-link" >CCPaymentActivateWebhookURLDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentBaseDepositWebhookMsg.html" data-type="entity-link" >CCPaymentBaseDepositWebhookMsg</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentDirectDepositWebhookDto.html" data-type="entity-link" >CCPaymentDirectDepositWebhookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentDirectDepositWebhookMsg.html" data-type="entity-link" >CCPaymentDirectDepositWebhookMsg</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentGenerateDepositAddressResponseDto.html" data-type="entity-link" >CCPaymentGenerateDepositAddressResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentGetDepositRecordResponseDto.html" data-type="entity-link" >CCPaymentGetDepositRecordResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentGetWithdrawFeeResponseDto.html" data-type="entity-link" >CCPaymentGetWithdrawFeeResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentGetWithdrawRecordFeeResponseDto.html" data-type="entity-link" >CCPaymentGetWithdrawRecordFeeResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentGetWithdrawRecordResponseDto.html" data-type="entity-link" >CCPaymentGetWithdrawRecordResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentResponseDto.html" data-type="entity-link" >CCPaymentResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentUserDepositWebhookDto.html" data-type="entity-link" >CCPaymentUserDepositWebhookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentUserDepositWebhookMsg.html" data-type="entity-link" >CCPaymentUserDepositWebhookMsg</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentUtils.html" data-type="entity-link" >CCPaymentUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentWithdrawalResponseDto.html" data-type="entity-link" >CCPaymentWithdrawalResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCPaymentWithdrawalWebhookDto.html" data-type="entity-link" >CCPaymentWithdrawalWebhookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChallengeBetDto.html" data-type="entity-link" >ChallengeBetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChallengeDto.html" data-type="entity-link" >ChallengeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChallengePublicDto.html" data-type="entity-link" >ChallengePublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordRequest.html" data-type="entity-link" >ChangePasswordRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartsStatsRequest.html" data-type="entity-link" >ChartsStatsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChaserStrategy.html" data-type="entity-link" >ChaserStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatAdminActionDto.html" data-type="entity-link" >ChatAdminActionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatGetMessagesDto.html" data-type="entity-link" >ChatGetMessagesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatJoinDto.html" data-type="entity-link" >ChatJoinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatLeaveDto.html" data-type="entity-link" >ChatLeaveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatSendMessageDto.html" data-type="entity-link" >ChatSendMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckWithdrawRequest.html" data-type="entity-link" >CheckWithdrawRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckWithdrawResponse.html" data-type="entity-link" >CheckWithdrawResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckWithdrawResult.html" data-type="entity-link" >CheckWithdrawResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClaimPromoCodeBody.html" data-type="entity-link" >ClaimPromoCodeBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClaimPromoCodeParams.html" data-type="entity-link" >ClaimPromoCodeParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientGateway.html" data-type="entity-link" >ClientGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientMessage.html" data-type="entity-link" >ClientMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientMessageResult.html" data-type="entity-link" >ClientMessageResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientRoomResult.html" data-type="entity-link" >ClientRoomResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColorBet.html" data-type="entity-link" >ColorBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnBet.html" data-type="entity-link" >ColumnBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComingSoonStatsDto.html" data-type="entity-link" >ComingSoonStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonResponseDto.html" data-type="entity-link" >CommonResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonResponseDto-1.html" data-type="entity-link" >CommonResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContextQueue.html" data-type="entity-link" >ContextQueue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContextWorkerHost.html" data-type="entity-link" >ContextWorkerHost</a>
                            </li>
                            <li class="link">
                                <a href="classes/CornerBet.html" data-type="entity-link" >CornerBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryDto.html" data-type="entity-link" >CountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryRegionDto.html" data-type="entity-link" >CountryRegionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAdminTipDto.html" data-type="entity-link" >CreateAdminTipDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAdminUserDto.html" data-type="entity-link" >CreateAdminUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAffiliateCodeByAdminQueryDto.html" data-type="entity-link" >CreateAffiliateCodeByAdminQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateApiKeyRequest.html" data-type="entity-link" >CreateApiKeyRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBetArgs.html" data-type="entity-link" >CreateBetArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBetArgs-1.html" data-type="entity-link" >CreateBetArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBetData.html" data-type="entity-link" >CreateBetData</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBetInternalArgs.html" data-type="entity-link" >CreateBetInternalArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBlackjackTableDto.html" data-type="entity-link" >CreateBlackjackTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBotDto.html" data-type="entity-link" >CreateBotDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateChallengeRequestDto.html" data-type="entity-link" >CreateChallengeRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFaqDto.html" data-type="entity-link" >CreateFaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGameArgs.html" data-type="entity-link" >CreateGameArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyPromoCodesRequest.html" data-type="entity-link" >CreateManyPromoCodesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNoteRequestDto.html" data-type="entity-link" >CreateNoteRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDto.html" data-type="entity-link" >CreateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePromoFirstDepositRequest.html" data-type="entity-link" >CreatePromoFirstDepositRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRegistrationInfoDto.html" data-type="entity-link" >CreateRegistrationInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSkinDeckDepositBody.html" data-type="entity-link" >CreateSkinDeckDepositBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTestUserRequestDto.html" data-type="entity-link" >CreateTestUserRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTipDto.html" data-type="entity-link" >CreateTipDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTradeResponse.html" data-type="entity-link" >CreateTradeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyDto.html" data-type="entity-link" >CurrencyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyTransformer.html" data-type="entity-link" >CurrencyTransformer</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyUtils.html" data-type="entity-link" >CurrencyUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardCasinoAnalyticsDto.html" data-type="entity-link" >DashboardCasinoAnalyticsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardCoreDto.html" data-type="entity-link" >DashboardCoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardGameAnalyticsDto.html" data-type="entity-link" >DashboardGameAnalyticsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardGameStatsDto.html" data-type="entity-link" >DashboardGameStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardGeneralRequestDto.html" data-type="entity-link" >DashboardGeneralRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardMainStatsDto.html" data-type="entity-link" >DashboardMainStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardQueryDto.html" data-type="entity-link" >DashboardQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardTimeOptionDto.html" data-type="entity-link" >DashboardTimeOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateFilterDto.html" data-type="entity-link" >DateFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateRangeModel.html" data-type="entity-link" >DateRangeModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DecimalFilterDto.html" data-type="entity-link" >DecimalFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DecimalScalar.html" data-type="entity-link" >DecimalScalar</a>
                            </li>
                            <li class="link">
                                <a href="classes/DecimalUtils.html" data-type="entity-link" >DecimalUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteAffiliateCodeByAdminQueryDto.html" data-type="entity-link" >DeleteAffiliateCodeByAdminQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteFaqDto.html" data-type="entity-link" >DeleteFaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteProviderGameGgrCommissionDto.html" data-type="entity-link" >DeleteProviderGameGgrCommissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositAddressDto.html" data-type="entity-link" >DepositAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositDto.html" data-type="entity-link" >DepositDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositMetrics.html" data-type="entity-link" >DepositMetrics</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositPublicDto.html" data-type="entity-link" >DepositPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositRecordDto.html" data-type="entity-link" >DepositRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositUser.html" data-type="entity-link" >DepositUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositUtils.html" data-type="entity-link" >DepositUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/DiceBetPayload.html" data-type="entity-link" >DiceBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/DiceBetRequestDto.html" data-type="entity-link" >DiceBetRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DiceBetResponseDto.html" data-type="entity-link" >DiceBetResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DiceConfigResponseDto.html" data-type="entity-link" >DiceConfigResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DiceGameConfigDto.html" data-type="entity-link" >DiceGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoubleStreetBet.html" data-type="entity-link" >DoubleStreetBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/DozenBet.html" data-type="entity-link" >DozenBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/EasyContextNotInitializedError.html" data-type="entity-link" >EasyContextNotInitializedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnableUserMfaResponseDto.html" data-type="entity-link" >EnableUserMfaResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorResponse.html" data-type="entity-link" >ErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorResponse-1.html" data-type="entity-link" >ErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/EstimatedPriceDto.html" data-type="entity-link" >EstimatedPriceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventDto.html" data-type="entity-link" >EventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventMessage.html" data-type="entity-link" >EventMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventResponseDto.html" data-type="entity-link" >EventResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EvoContext.html" data-type="entity-link" >EvoContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/EvoGamesException.html" data-type="entity-link" >EvoGamesException</a>
                            </li>
                            <li class="link">
                                <a href="classes/EvoGamesExceptionFilter.html" data-type="entity-link" >EvoGamesExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/EvoGamesSlotGameInfo.html" data-type="entity-link" >EvoGamesSlotGameInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExchangeRateQueryDto.html" data-type="entity-link" >ExchangeRateQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExchangeRatesDto.html" data-type="entity-link" >ExchangeRatesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExcludeUsersDto.html" data-type="entity-link" >ExcludeUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExecuteTestUserActionRequestDto.html" data-type="entity-link" >ExecuteTestUserActionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpiresWorkerDto.html" data-type="entity-link" >ExpiresWorkerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedHouseGameBet.html" data-type="entity-link" >ExtendedHouseGameBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/FaqDto.html" data-type="entity-link" >FaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackAuthTokenDto.html" data-type="entity-link" >FastTrackAuthTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackBonusCreditBody.html" data-type="entity-link" >FastTrackBonusCreditBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackBonusCreditFundsBody.html" data-type="entity-link" >FastTrackBonusCreditFundsBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackBonusDto.html" data-type="entity-link" >FastTrackBonusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackBonusInfo.html" data-type="entity-link" >FastTrackBonusInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackBonusListResponse.html" data-type="entity-link" >FastTrackBonusListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackCasinoData.html" data-type="entity-link" >FastTrackCasinoData</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackCasinoDto.html" data-type="entity-link" >FastTrackCasinoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackConfigService.html" data-type="entity-link" >FastTrackConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackDebugConfigService.html" data-type="entity-link" >FastTrackDebugConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackReconciliationResponse.html" data-type="entity-link" >FastTrackReconciliationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackTokenPayloadDto.html" data-type="entity-link" >FastTrackTokenPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackUserBlock.html" data-type="entity-link" >FastTrackUserBlock</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackUserBlockResponse.html" data-type="entity-link" >FastTrackUserBlockResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackUserConsentsRequest.html" data-type="entity-link" >FastTrackUserConsentsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackUserConsentsResponse.html" data-type="entity-link" >FastTrackUserConsentsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackUserDetailsResponse.html" data-type="entity-link" >FastTrackUserDetailsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FastTrackСonsent.html" data-type="entity-link" >FastTrackСonsent</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileDeleteError.html" data-type="entity-link" >FileDeleteError</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUploadError.html" data-type="entity-link" >FileUploadError</a>
                            </li>
                            <li class="link">
                                <a href="classes/FinanceStatsRequest.html" data-type="entity-link" >FinanceStatsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAdminTipsByUserQueryDto.html" data-type="entity-link" >FindManyAdminTipsByUserQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAdminTipsQueryDto.html" data-type="entity-link" >FindManyAdminTipsQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateClaimsQuery.html" data-type="entity-link" >FindManyAffiliateClaimsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateQuery.html" data-type="entity-link" >FindManyAffiliateQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateStreamerQuery.html" data-type="entity-link" >FindManyAffiliateStreamerQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateStreamerReferralQuery.html" data-type="entity-link" >FindManyAffiliateStreamerReferralQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateStreamerReferralResponse.html" data-type="entity-link" >FindManyAffiliateStreamerReferralResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateStreamerResponse.html" data-type="entity-link" >FindManyAffiliateStreamerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateUserRequestDto.html" data-type="entity-link" >FindManyAffiliateUserRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateUsersQuery.html" data-type="entity-link" >FindManyAffiliateUsersQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateUsersWhere.html" data-type="entity-link" >FindManyAffiliateUsersWhere</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyAffiliateWhere.html" data-type="entity-link" >FindManyAffiliateWhere</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyBetsAdminQuery.html" data-type="entity-link" >FindManyBetsAdminQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyBetsQuery.html" data-type="entity-link" >FindManyBetsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyBetsQuery-1.html" data-type="entity-link" >FindManyBetsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyBotsQuery.html" data-type="entity-link" >FindManyBotsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyChallengeBetsQuery.html" data-type="entity-link" >FindManyChallengeBetsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyChallengesPublicQuery.html" data-type="entity-link" >FindManyChallengesPublicQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyChallengesQuery.html" data-type="entity-link" >FindManyChallengesQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyDepositsAdminQuery.html" data-type="entity-link" >FindManyDepositsAdminQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyDepositsQuery.html" data-type="entity-link" >FindManyDepositsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyFavoriteGamesDto.html" data-type="entity-link" >FindManyFavoriteGamesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyGameIdentitiesDto.html" data-type="entity-link" >FindManyGameIdentitiesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyGameIdentitiesPublicDto.html" data-type="entity-link" >FindManyGameIdentitiesPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyGameProvidersDto.html" data-type="entity-link" >FindManyGameProvidersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyGameProvidersPublicDto.html" data-type="entity-link" >FindManyGameProvidersPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyGamesQuery.html" data-type="entity-link" >FindManyGamesQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyLeaderboardPublicQuery.html" data-type="entity-link" >FindManyLeaderboardPublicQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyLeaderboardQuery.html" data-type="entity-link" >FindManyLeaderboardQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyLeaderboardUserQuery.html" data-type="entity-link" >FindManyLeaderboardUserQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyMyChallengesPublicQuery.html" data-type="entity-link" >FindManyMyChallengesPublicQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyNotesQueryDto.html" data-type="entity-link" >FindManyNotesQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyPromoCodesPublicQuery.html" data-type="entity-link" >FindManyPromoCodesPublicQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyPromoCodesQuery.html" data-type="entity-link" >FindManyPromoCodesQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyPromoGameWhitelistQuery.html" data-type="entity-link" >FindManyPromoGameWhitelistQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyProviderGameGgrCommissionDto.html" data-type="entity-link" >FindManyProviderGameGgrCommissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyRakebackQuery.html" data-type="entity-link" >FindManyRakebackQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyRakebackWhere.html" data-type="entity-link" >FindManyRakebackWhere</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyReferralsResponseDto.html" data-type="entity-link" >FindManyReferralsResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManySessionsDto.html" data-type="entity-link" >FindManySessionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyTipQueryDto.html" data-type="entity-link" >FindManyTipQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyTipResponseDto.html" data-type="entity-link" >FindManyTipResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyTransactionsQuery.html" data-type="entity-link" >FindManyTransactionsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyUserFairnessSeedsPreviousQuery.html" data-type="entity-link" >FindManyUserFairnessSeedsPreviousQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyUserPromoCodesQuery.html" data-type="entity-link" >FindManyUserPromoCodesQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyUserTipByAdminResponseDto.html" data-type="entity-link" >FindManyUserTipByAdminResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyVipApplicationAdminQuery.html" data-type="entity-link" >FindManyVipApplicationAdminQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyWithdrawsAdminQuery.html" data-type="entity-link" >FindManyWithdrawsAdminQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyWithdrawsQuery.html" data-type="entity-link" >FindManyWithdrawsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindMyPromoCodesQuery.html" data-type="entity-link" >FindMyPromoCodesQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneAffiliateQuery.html" data-type="entity-link" >FindOneAffiliateQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneAffiliateStatsQuery.html" data-type="entity-link" >FindOneAffiliateStatsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneAffiliateWhere.html" data-type="entity-link" >FindOneAffiliateWhere</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneRakebackClaimableUsdQuery.html" data-type="entity-link" >FindOneRakebackClaimableUsdQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneRakebackResponseDto.html" data-type="entity-link" >FindOneRakebackResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneRegistrationInfoDto.html" data-type="entity-link" >FindOneRegistrationInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneWithdrawDto.html" data-type="entity-link" >FindOneWithdrawDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FinishGameArgs.html" data-type="entity-link" >FinishGameArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgotPasswordRequestDto.html" data-type="entity-link" >ForgotPasswordRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreespinsRequestDto.html" data-type="entity-link" >FreespinsRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreespinsRequestDto-1.html" data-type="entity-link" >FreespinsRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreespinsTransactionRequestDto.html" data-type="entity-link" >FreespinsTransactionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreespinsTransactionRequestDto-1.html" data-type="entity-link" >FreespinsTransactionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GamblingCheckDto.html" data-type="entity-link" >GamblingCheckDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GamblingLimitsDto.html" data-type="entity-link" >GamblingLimitsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameAnalytics.html" data-type="entity-link" >GameAnalytics</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentityDto.html" data-type="entity-link" >GameIdentityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentityFilterDto.html" data-type="entity-link" >GameIdentityFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentityImagesDto.html" data-type="entity-link" >GameIdentityImagesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentityInfoDto.html" data-type="entity-link" >GameIdentityInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentityMainPublicResponseDto.html" data-type="entity-link" >GameIdentityMainPublicResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentityPublicDto.html" data-type="entity-link" >GameIdentityPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentitySettingsDto.html" data-type="entity-link" >GameIdentitySettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameIdentityShortDto.html" data-type="entity-link" >GameIdentityShortDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameInCategoryDto.html" data-type="entity-link" >GameInCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchDemoRequestDto.html" data-type="entity-link" >GameLaunchDemoRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchDemoRequestDto-1.html" data-type="entity-link" >GameLaunchDemoRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchRealRequestDto.html" data-type="entity-link" >GameLaunchRealRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchRealRequestDto-1.html" data-type="entity-link" >GameLaunchRealRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchResponse.html" data-type="entity-link" >GameLaunchResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchResponse-1.html" data-type="entity-link" >GameLaunchResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchUserDto.html" data-type="entity-link" >GameLaunchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameLaunchUserDto-1.html" data-type="entity-link" >GameLaunchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameProviderDto.html" data-type="entity-link" >GameProviderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameProviderFilterDto.html" data-type="entity-link" >GameProviderFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameProviderImagesDto.html" data-type="entity-link" >GameProviderImagesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameProviderPublicDto.html" data-type="entity-link" >GameProviderPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GamesStatsRequest.html" data-type="entity-link" >GamesStatsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameTypeAnalytics.html" data-type="entity-link" >GameTypeAnalytics</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameWhitelistItem.html" data-type="entity-link" >GameWhitelistItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayError.html" data-type="entity-link" >GatewayError</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayErrorResult.html" data-type="entity-link" >GatewayErrorResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayTimeoutError.html" data-type="entity-link" >GatewayTimeoutError</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayUserBase.html" data-type="entity-link" >GatewayUserBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeeTest.html" data-type="entity-link" >GeeTest</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateDepositAddressDto.html" data-type="entity-link" >GenerateDepositAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeoCheckDto.html" data-type="entity-link" >GeoCheckDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllUsersDto.html" data-type="entity-link" >GetAllUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBetRequestDto.html" data-type="entity-link" >GetBetRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBlackjackGameInfoByPlayerHandIdDto.html" data-type="entity-link" >GetBlackjackGameInfoByPlayerHandIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBlackjackTableInfoDto.html" data-type="entity-link" >GetBlackjackTableInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetExternalReferralInfoQuery.html" data-type="entity-link" >GetExternalReferralInfoQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetLiveBetsDto.html" data-type="entity-link" >GetLiveBetsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetMyBetsDto.html" data-type="entity-link" >GetMyBetsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSkinDeckMarketInventoryQuery.html" data-type="entity-link" >GetSkinDeckMarketInventoryQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSkinDeckMarketInventoryResponse.html" data-type="entity-link" >GetSkinDeckMarketInventoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSkinDeckTradeHistoryQuery.html" data-type="entity-link" >GetSkinDeckTradeHistoryQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSkinDeckUserInventoryQuery.html" data-type="entity-link" >GetSkinDeckUserInventoryQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSkinDeckUserInventoryResponse.html" data-type="entity-link" >GetSkinDeckUserInventoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetWithdrawLimitsResponse.html" data-type="entity-link" >GetWithdrawLimitsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GgrCommissionRuleDto.html" data-type="entity-link" >GgrCommissionRuleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GgrCommissionRulePayloadDto.html" data-type="entity-link" >GgrCommissionRulePayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GgrCommissionValidator.html" data-type="entity-link" >GgrCommissionValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/GgrFiatFixedDto.html" data-type="entity-link" >GgrFiatFixedDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GgrMetrics.html" data-type="entity-link" >GgrMetrics</a>
                            </li>
                            <li class="link">
                                <a href="classes/GgrUtils.html" data-type="entity-link" >GgrUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/GivePrizeRequest.html" data-type="entity-link" >GivePrizeRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalExceptionFilter.html" data-type="entity-link" >GlobalExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleSetupUsernameJwtPayload.html" data-type="entity-link" >GoogleSetupUsernameJwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/Gr8AuthDto.html" data-type="entity-link" >Gr8AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HalfBet.html" data-type="entity-link" >HalfBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleBlackjackActionRequest.html" data-type="entity-link" >HandleBlackjackActionRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/HouseGameBetDetailsResponseDto.html" data-type="entity-link" >HouseGameBetDetailsResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HouseGameBetPayload.html" data-type="entity-link" >HouseGameBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/HouseGameConfigBase.html" data-type="entity-link" >HouseGameConfigBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/HouseGameConfigBaseDto.html" data-type="entity-link" >HouseGameConfigBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HouseGameMinesBetInfo.html" data-type="entity-link" >HouseGameMinesBetInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/HouseGameMinesBoard.html" data-type="entity-link" >HouseGameMinesBoard</a>
                            </li>
                            <li class="link">
                                <a href="classes/HouseGameMinesBoardWithMultipliers.html" data-type="entity-link" >HouseGameMinesBoardWithMultipliers</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdDto.html" data-type="entity-link" >IdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdentityParam.html" data-type="entity-link" >IdentityParam</a>
                            </li>
                            <li class="link">
                                <a href="classes/IntFilterDto.html" data-type="entity-link" >IntFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IpUtils.html" data-type="entity-link" >IpUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsBigIntConstraint.html" data-type="entity-link" >IsBigIntConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsBotToggleDto.html" data-type="entity-link" >IsBotToggleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsDateAfterConstraint.html" data-type="entity-link" >IsDateAfterConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsDateWithoutTimeConstraint.html" data-type="entity-link" >IsDateWithoutTimeConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsDecimalConstraint.html" data-type="entity-link" >IsDecimalConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsNotBlacklistedConstraint.html" data-type="entity-link" >IsNotBlacklistedConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinBlackjackTableDto.html" data-type="entity-link" >JoinBlackjackTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/KenoBetPayload.html" data-type="entity-link" >KenoBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/KenoBetRequestDto.html" data-type="entity-link" >KenoBetRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/KenoBetResponseDto.html" data-type="entity-link" >KenoBetResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/KenoConfigResponseDto.html" data-type="entity-link" >KenoConfigResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/KenoGameConfigDto.html" data-type="entity-link" >KenoGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/KycUtils.html" data-type="entity-link" >KycUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardChecker.html" data-type="entity-link" >LeaderboardChecker</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardConfigDto.html" data-type="entity-link" >LeaderboardConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardCurrentUserPublicDto.html" data-type="entity-link" >LeaderboardCurrentUserPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardDto.html" data-type="entity-link" >LeaderboardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardPrizeConfigDto.html" data-type="entity-link" >LeaderboardPrizeConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardPrizeDto.html" data-type="entity-link" >LeaderboardPrizeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardPublicDto.html" data-type="entity-link" >LeaderboardPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardQueueProcessor.html" data-type="entity-link" >LeaderboardQueueProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardScheduleConfigDto.html" data-type="entity-link" >LeaderboardScheduleConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardScheduleDto.html" data-type="entity-link" >LeaderboardScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardUserDto.html" data-type="entity-link" >LeaderboardUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardUserPositionViewDto.html" data-type="entity-link" >LeaderboardUserPositionViewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaderboardUserPublicDto.html" data-type="entity-link" >LeaderboardUserPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaveBlackjackTableDto.html" data-type="entity-link" >LeaveBlackjackTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeaveBlackjackTablePositionDto.html" data-type="entity-link" >LeaveBlackjackTablePositionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LimboBetPayload.html" data-type="entity-link" >LimboBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/LimboBetRequestDto.html" data-type="entity-link" >LimboBetRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LimboBetResponseDto.html" data-type="entity-link" >LimboBetResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LimboConfigResponseDto.html" data-type="entity-link" >LimboConfigResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LimboGameConfigDto.html" data-type="entity-link" >LimboGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LiveBetsJoinDto.html" data-type="entity-link" >LiveBetsJoinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LiveBetsLeaveDto.html" data-type="entity-link" >LiveBetsLeaveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LockExceptionFilter.html" data-type="entity-link" >LockExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggerDto.html" data-type="entity-link" >LoggerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageContentDto.html" data-type="entity-link" >MessageContentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageDto.html" data-type="entity-link" >MessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageExceptionFilter.html" data-type="entity-link" >MessageExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageResponseDto.html" data-type="entity-link" >MessageResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MfaAuthGenerateResponse.html" data-type="entity-link" >MfaAuthGenerateResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/MfaAuthVerifyRequestDto.html" data-type="entity-link" >MfaAuthVerifyRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinesBetPayload.html" data-type="entity-link" >MinesBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinesConfigResponseDto.html" data-type="entity-link" >MinesConfigResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinesGameConfigDto.html" data-type="entity-link" >MinesGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinesGameResponseDto.html" data-type="entity-link" >MinesGameResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockExchangeRatesRepository.html" data-type="entity-link" >MockExchangeRatesRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/MonkeyRunBetPayload.html" data-type="entity-link" >MonkeyRunBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/MonkeyRunBetRespDto.html" data-type="entity-link" >MonkeyRunBetRespDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MonkeyRunGameConfigDto.html" data-type="entity-link" >MonkeyRunGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MonkeyRunMultipliersResponse.html" data-type="entity-link" >MonkeyRunMultipliersResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NetworkCurrencyDto.html" data-type="entity-link" >NetworkCurrencyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewApplicationDto.html" data-type="entity-link" >NewApplicationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgrMetrics.html" data-type="entity-link" >NgrMetrics</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotificationDto.html" data-type="entity-link" >NotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotificationRedis.html" data-type="entity-link" >NotificationRedis</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotifyDelayStrategy.html" data-type="entity-link" >NotifyDelayStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotifyIdempotencyStrategy.html" data-type="entity-link" >NotifyIdempotencyStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentCreatePaymentRequest.html" data-type="entity-link" >NowpaymentCreatePaymentRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentCreatePaymentResponse.html" data-type="entity-link" >NowpaymentCreatePaymentResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentCreatePayoutRequest.html" data-type="entity-link" >NowpaymentCreatePayoutRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentCreatePayoutRequestWithdrawalDto.html" data-type="entity-link" >NowpaymentCreatePayoutRequestWithdrawalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentCreatePayoutResponse.html" data-type="entity-link" >NowpaymentCreatePayoutResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentCreatePayoutResponseDto.html" data-type="entity-link" >NowpaymentCreatePayoutResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetEstimatedPriceForPaymentQuery.html" data-type="entity-link" >NowpaymentGetEstimatedPriceForPaymentQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetEstimatedPriceForPaymentResponse.html" data-type="entity-link" >NowpaymentGetEstimatedPriceForPaymentResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetMinAmountForPaymentQuery.html" data-type="entity-link" >NowpaymentGetMinAmountForPaymentQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetMinAmountForPaymentResponse.html" data-type="entity-link" >NowpaymentGetMinAmountForPaymentResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetMinAmountForPayoutResponse.html" data-type="entity-link" >NowpaymentGetMinAmountForPayoutResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetPaymentStatusResponse.html" data-type="entity-link" >NowpaymentGetPaymentStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetWithdrawFeeQuery.html" data-type="entity-link" >NowpaymentGetWithdrawFeeQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentGetWithdrawFeeResponse.html" data-type="entity-link" >NowpaymentGetWithdrawFeeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentsApiStatusResponse.html" data-type="entity-link" >NowpaymentsApiStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentsAuthRequest.html" data-type="entity-link" >NowpaymentsAuthRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentsAuthResponse.html" data-type="entity-link" >NowpaymentsAuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentsUtils.html" data-type="entity-link" >NowpaymentsUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentValidateAddressErrorResponse.html" data-type="entity-link" >NowpaymentValidateAddressErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentValidateAddressRequest.html" data-type="entity-link" >NowpaymentValidateAddressRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentVerifyWithdrawalRequest.html" data-type="entity-link" >NowpaymentVerifyWithdrawalRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentWebhookPaymentDto.html" data-type="entity-link" >NowpaymentWebhookPaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentWebhookPaymentFeeDto.html" data-type="entity-link" >NowpaymentWebhookPaymentFeeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowpaymentWebhookWithdrawalDto.html" data-type="entity-link" >NowpaymentWebhookWithdrawalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NowPaymentWithdrawNotFinishedException.html" data-type="entity-link" >NowPaymentWithdrawNotFinishedException</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberFilterDto.html" data-type="entity-link" >NumberFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenCellAutoSpinMinesDto.html" data-type="entity-link" >OpenCellAutoSpinMinesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenCellMinesDto.html" data-type="entity-link" >OpenCellMinesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenCellMinesResponseDto.html" data-type="entity-link" >OpenCellMinesResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenResponseDto.html" data-type="entity-link" >OpenResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageDto.html" data-type="entity-link" >PageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageMetaDto.html" data-type="entity-link" >PageMetaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedBetsRequestDto.html" data-type="entity-link" >PaginatedBetsRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedBetsWithUsersRequestDto.html" data-type="entity-link" >PaginatedBetsWithUsersRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedBlackjackTablesDto.html" data-type="entity-link" >PaginatedBlackjackTablesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedDataRequestDto.html" data-type="entity-link" >PaginatedDataRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedDto.html" data-type="entity-link" >PaginatedDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedQuery.html" data-type="entity-link" >PaginatedQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationUtils.html" data-type="entity-link" >PaginationUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParityBet.html" data-type="entity-link" >ParityBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentEstimatedPriceDto.html" data-type="entity-link" >PaymentEstimatedPriceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentMinAmountDto.html" data-type="entity-link" >PaymentMinAmountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentProviderDto.html" data-type="entity-link" >PaymentProviderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaceBlackjackBetDto.html" data-type="entity-link" >PlaceBlackjackBetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaceMinesBetDto.html" data-type="entity-link" >PlaceMinesBetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaceMonkeyRunBetDto.html" data-type="entity-link" >PlaceMonkeyRunBetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayBlackjackUserActionDto.html" data-type="entity-link" >PlayBlackjackUserActionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayerBetsDto.html" data-type="entity-link" >PlayerBetsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayMonkeyRunDto.html" data-type="entity-link" >PlayMonkeyRunDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayRequestDto.html" data-type="entity-link" >PlayRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayRequestDto-1.html" data-type="entity-link" >PlayRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayRequestExtraDto.html" data-type="entity-link" >PlayRequestExtraDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayTransactionRequestDto.html" data-type="entity-link" >PlayTransactionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayTransactionRequestDto-1.html" data-type="entity-link" >PlayTransactionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlinkoBetPayload.html" data-type="entity-link" >PlinkoBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlinkoBetRequestDto.html" data-type="entity-link" >PlinkoBetRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlinkoConfigResponseDto.html" data-type="entity-link" >PlinkoConfigResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlinkoGameConfigDto.html" data-type="entity-link" >PlinkoGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlinkoGameResponseDto.html" data-type="entity-link" >PlinkoGameResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8BetTransactionDto.html" data-type="entity-link" >Pm8BetTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8BetTransactionResponseDto.html" data-type="entity-link" >Pm8BetTransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8DataApiGamesParamsDto.html" data-type="entity-link" >Pm8DataApiGamesParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8ErrorDtoFilter.html" data-type="entity-link" >Pm8ErrorDtoFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8Exception.html" data-type="entity-link" >Pm8Exception</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8FreeSpinData.html" data-type="entity-link" >Pm8FreeSpinData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8LaunchDto.html" data-type="entity-link" >Pm8LaunchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PathPlayerId.html" data-type="entity-link" >Pm8PathPlayerId</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PlayerBalanceDto.html" data-type="entity-link" >Pm8PlayerBalanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PlayerInfoResponseDto.html" data-type="entity-link" >Pm8PlayerInfoResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PlayerInfoWithBalance.html" data-type="entity-link" >Pm8PlayerInfoWithBalance</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PlayerInitSessionDto.html" data-type="entity-link" >Pm8PlayerInitSessionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PlayerPathSessionToken.html" data-type="entity-link" >Pm8PlayerPathSessionToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PlayerQueryProviderId.html" data-type="entity-link" >Pm8PlayerQueryProviderId</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PromoWinTransactionDto.html" data-type="entity-link" >Pm8PromoWinTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8PromoWinTransactionResponseDto.html" data-type="entity-link" >Pm8PromoWinTransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8RefundTransactionDto.html" data-type="entity-link" >Pm8RefundTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8RefundTransactionResponseDto.html" data-type="entity-link" >Pm8RefundTransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8SideSplit.html" data-type="entity-link" >Pm8SideSplit</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8TestSessionDto.html" data-type="entity-link" >Pm8TestSessionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8TokenManager.html" data-type="entity-link" >Pm8TokenManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8TournamentWinTransactionDto.html" data-type="entity-link" >Pm8TournamentWinTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8TournamentWinTransactionResponseDto.html" data-type="entity-link" >Pm8TournamentWinTransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8TransactionDto.html" data-type="entity-link" >Pm8TransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8WinTransactionDto.html" data-type="entity-link" >Pm8WinTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pm8WinTransactionResponseDto.html" data-type="entity-link" >Pm8WinTransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostbackExtras.html" data-type="entity-link" >PostbackExtras</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostbackExtras-1.html" data-type="entity-link" >PostbackExtras</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrepareGameResponse.html" data-type="entity-link" >PrepareGameResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaErrorUtils.html" data-type="entity-link" >PrismaErrorUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/Private.html" data-type="entity-link" >Private</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrivateCell.html" data-type="entity-link" >PrivateCell</a>
                            </li>
                            <li class="link">
                                <a href="classes/PromoCodeDto.html" data-type="entity-link" >PromoCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PromoCodePublicDto.html" data-type="entity-link" >PromoCodePublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PromoGameWhitelistDto.html" data-type="entity-link" >PromoGameWhitelistDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderApiErrorException.html" data-type="entity-link" >ProviderApiErrorException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderCurrencyDto.html" data-type="entity-link" >ProviderCurrencyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderCurrencyMinAmountDto.html" data-type="entity-link" >ProviderCurrencyMinAmountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderExtras.html" data-type="entity-link" >ProviderExtras</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderInsufficientBalanceException.html" data-type="entity-link" >ProviderInsufficientBalanceException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProvidersStatsRequest.html" data-type="entity-link" >ProvidersStatsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProvidersStatsReturn.html" data-type="entity-link" >ProvidersStatsReturn</a>
                            </li>
                            <li class="link">
                                <a href="classes/Public.html" data-type="entity-link" >Public</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublicCell.html" data-type="entity-link" >PublicCell</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublicUserDto.html" data-type="entity-link" >PublicUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PurgeQueueResponseDto.html" data-type="entity-link" >PurgeQueueResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryMap.html" data-type="entity-link" >QueryMap</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryMap-1.html" data-type="entity-link" >QueryMap</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueueInfoDto.html" data-type="entity-link" >QueueInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueueInspectionQueryDto.html" data-type="entity-link" >QueueInspectionQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RakebackClaimRequestDto.html" data-type="entity-link" >RakebackClaimRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RakebackClaimResponseDto.html" data-type="entity-link" >RakebackClaimResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RakebackDto.html" data-type="entity-link" >RakebackDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RakebackInstantDto.html" data-type="entity-link" >RakebackInstantDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RakebackUtils.html" data-type="entity-link" >RakebackUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/RakebackWithPeriodDto.html" data-type="entity-link" >RakebackWithPeriodDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecaptchaThrottlerException.html" data-type="entity-link" >RecaptchaThrottlerException</a>
                            </li>
                            <li class="link">
                                <a href="classes/RedirectException.html" data-type="entity-link" >RedirectException</a>
                            </li>
                            <li class="link">
                                <a href="classes/RedirectUrlDto.html" data-type="entity-link" >RedirectUrlDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RedisConverter.html" data-type="entity-link" >RedisConverter</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefundBetsJobData.html" data-type="entity-link" >RefundBetsJobData</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrationInfoDto.html" data-type="entity-link" >RegistrationInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrationInfoUserDto.html" data-type="entity-link" >RegistrationInfoUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrationMetrics.html" data-type="entity-link" >RegistrationMetrics</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReplayDeckRequestDto.html" data-type="entity-link" >ReplayDeckRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reset2faRequestDto.html" data-type="entity-link" >Reset2faRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordRequestDto.html" data-type="entity-link" >ResetPasswordRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetUserPassword.html" data-type="entity-link" >ResetUserPassword</a>
                            </li>
                            <li class="link">
                                <a href="classes/RestrictionsDto.html" data-type="entity-link" >RestrictionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResultResponse.html" data-type="entity-link" >ResultResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReviewedApplicationDto.html" data-type="entity-link" >ReviewedApplicationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RmAdminUserExcludeDto.html" data-type="entity-link" >RmAdminUserExcludeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rng.html" data-type="entity-link" >Rng</a>
                            </li>
                            <li class="link">
                                <a href="classes/RngError.html" data-type="entity-link" >RngError</a>
                            </li>
                            <li class="link">
                                <a href="classes/RngGames.html" data-type="entity-link" >RngGames</a>
                            </li>
                            <li class="link">
                                <a href="classes/RollbackRequestDto.html" data-type="entity-link" >RollbackRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RollbackRequestDto-1.html" data-type="entity-link" >RollbackRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RollbackTransactionRequestDto.html" data-type="entity-link" >RollbackTransactionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RollbackTransactionRequestDto-1.html" data-type="entity-link" >RollbackTransactionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RollbackWinnerRequestDto.html" data-type="entity-link" >RollbackWinnerRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouletteBetPayload.html" data-type="entity-link" >RouletteBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouletteBetPayloadDeserialized.html" data-type="entity-link" >RouletteBetPayloadDeserialized</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouletteBetRequestDto.html" data-type="entity-link" >RouletteBetRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouletteBetResponseDto.html" data-type="entity-link" >RouletteBetResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouletteConfigResponseDto.html" data-type="entity-link" >RouletteConfigResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouletteGameConfigDto.html" data-type="entity-link" >RouletteGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouletteParams.html" data-type="entity-link" >RouletteParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/SaveBetFailedException.html" data-type="entity-link" >SaveBetFailedException</a>
                            </li>
                            <li class="link">
                                <a href="classes/SaveProviderGameGgrCommissionDto.html" data-type="entity-link" >SaveProviderGameGgrCommissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeedData.html" data-type="entity-link" >SeedData</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfExcludeDto.html" data-type="entity-link" >SelfExcludeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendNotificationRequestDto.html" data-type="entity-link" >SendNotificationRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendWithdrawArgs.html" data-type="entity-link" >SendWithdrawArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendWithdrawResponseDto.html" data-type="entity-link" >SendWithdrawResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SentryFilter.html" data-type="entity-link" >SentryFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeriesUtils.html" data-type="entity-link" >SeriesUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionTokenDto.html" data-type="entity-link" >SessionTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetAdminUserExcludeDto.html" data-type="entity-link" >SetAdminUserExcludeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetAdminUserLimitDto.html" data-type="entity-link" >SetAdminUserLimitDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetLimitDto.html" data-type="entity-link" >SetLimitDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetLogLevelDto.html" data-type="entity-link" >SetLogLevelDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetSelfExcludeDto.html" data-type="entity-link" >SetSelfExcludeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettleBetsArgs.html" data-type="entity-link" >SettleBetsArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettleUserBetItem.html" data-type="entity-link" >SettleUserBetItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettleUserBetsArgs.html" data-type="entity-link" >SettleUserBetsArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettleUserBetsData.html" data-type="entity-link" >SettleUserBetsData</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettleUserBetsJobData.html" data-type="entity-link" >SettleUserBetsJobData</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetupUsernamePayloadDto.html" data-type="entity-link" >SetupUsernamePayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetupUsernameQueryDto.html" data-type="entity-link" >SetupUsernameQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInResponseDto.html" data-type="entity-link" >SignInResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SimulationService.html" data-type="entity-link" >SimulationService</a>
                            </li>
                            <li class="link">
                                <a href="classes/SitAtBlackjackTableDto.html" data-type="entity-link" >SitAtBlackjackTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkinDeckBotResponse.html" data-type="entity-link" >SkinDeckBotResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkindeckCallbackFilter.html" data-type="entity-link" >SkindeckCallbackFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkinDeckCallbackResponse.html" data-type="entity-link" >SkinDeckCallbackResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkinDeckInventoryResponse.html" data-type="entity-link" >SkinDeckInventoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkinDeckOfferBody.html" data-type="entity-link" >SkinDeckOfferBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkinDeckOfferResponse.html" data-type="entity-link" >SkinDeckOfferResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkinDeckTradeResponse.html" data-type="entity-link" >SkinDeckTradeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkindeckUtils.html" data-type="entity-link" >SkindeckUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlotFeatureHelper.html" data-type="entity-link" >SlotFeatureHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlotGameBetDetailsResponseDto.html" data-type="entity-link" >SlotGameBetDetailsResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteGameConfigDto.html" data-type="entity-link" >SpeedRouletteGameConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteGameDto.html" data-type="entity-link" >SpeedRouletteGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteGamePublicDto.html" data-type="entity-link" >SpeedRouletteGamePublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteGameRouletteInfoResponse.html" data-type="entity-link" >SpeedRouletteGameRouletteInfoResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRoulettePlaceBetBase.html" data-type="entity-link" >SpeedRoulettePlaceBetBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRoulettePlaceBetEvent.html" data-type="entity-link" >SpeedRoulettePlaceBetEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRoulettePlaceBetRequest.html" data-type="entity-link" >SpeedRoulettePlaceBetRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRoulettePlaceBetRequest-1.html" data-type="entity-link" >SpeedRoulettePlaceBetRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRoulettePlaceBetResponse.html" data-type="entity-link" >SpeedRoulettePlaceBetResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteStatDto.html" data-type="entity-link" >SpeedRouletteStatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteStateConfig.html" data-type="entity-link" >SpeedRouletteStateConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteStateDurationConfig.html" data-type="entity-link" >SpeedRouletteStateDurationConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteStateJobData.html" data-type="entity-link" >SpeedRouletteStateJobData</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteStateModel.html" data-type="entity-link" >SpeedRouletteStateModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteStateProcessor.html" data-type="entity-link" >SpeedRouletteStateProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeedRouletteUserDto.html" data-type="entity-link" >SpeedRouletteUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SplitBet.html" data-type="entity-link" >SplitBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/SportsbookAuthTokenDto.html" data-type="entity-link" >SportsbookAuthTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SportsbookDtoFilter.html" data-type="entity-link" >SportsbookDtoFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SportsbookException.html" data-type="entity-link" >SportsbookException</a>
                            </li>
                            <li class="link">
                                <a href="classes/SportsbookTokenPayloadDto.html" data-type="entity-link" >SportsbookTokenPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StartSessionProcessor.html" data-type="entity-link" >StartSessionProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/StateUtils.html" data-type="entity-link" >StateUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatItemDateRangeModel.html" data-type="entity-link" >StatItemDateRangeModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatModel.html" data-type="entity-link" >StatModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatsReturnPerProvider.html" data-type="entity-link" >StatsReturnPerProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/SteamSetupUsernameJwtPayload.html" data-type="entity-link" >SteamSetupUsernameJwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/StraightBet.html" data-type="entity-link" >StraightBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/StreetBet.html" data-type="entity-link" >StreetBet</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringFilterDto.html" data-type="entity-link" >StringFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SuccessDto.html" data-type="entity-link" >SuccessDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SuccessResponse.html" data-type="entity-link" >SuccessResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TasksWorker.html" data-type="entity-link" >TasksWorker</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestUserActionDto.html" data-type="entity-link" >TestUserActionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeSeriesEntry.html" data-type="entity-link" >TimeSeriesEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/TipDto.html" data-type="entity-link" >TipDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrafficUserReg.html" data-type="entity-link" >TrafficUserReg</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionContext.html" data-type="entity-link" >TransactionContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionDto.html" data-type="entity-link" >TransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionFilterDto.html" data-type="entity-link" >TransactionFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionParams.html" data-type="entity-link" >TransactionParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionPayload.html" data-type="entity-link" >TransactionPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionPublicDto.html" data-type="entity-link" >TransactionPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionRequestDto.html" data-type="entity-link" >TransactionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionResponseDto.html" data-type="entity-link" >TransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionResponseDto-1.html" data-type="entity-link" >TransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionResponseDto-2.html" data-type="entity-link" >TransactionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionValidationService.html" data-type="entity-link" >TransactionValidationService</a>
                            </li>
                            <li class="link">
                                <a href="classes/TStatData.html" data-type="entity-link" >TStatData</a>
                            </li>
                            <li class="link">
                                <a href="classes/TurnoverMetrics.html" data-type="entity-link" >TurnoverMetrics</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypePieEntry.html" data-type="entity-link" >TypePieEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBlackjackTableDto.html" data-type="entity-link" >UpdateBlackjackTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBotDto.html" data-type="entity-link" >UpdateBotDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateChallengeRequestDto.html" data-type="entity-link" >UpdateChallengeRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClientSeedsRequestDto.html" data-type="entity-link" >UpdateClientSeedsRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFaqDto.html" data-type="entity-link" >UpdateFaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameArgs.html" data-type="entity-link" >UpdateGameArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameIdentitiesDto.html" data-type="entity-link" >UpdateGameIdentitiesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameIdentityDto.html" data-type="entity-link" >UpdateGameIdentityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameIdentityWithIdDto.html" data-type="entity-link" >UpdateGameIdentityWithIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameMainGridItemDto.html" data-type="entity-link" >UpdateGameMainGridItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHouseGameSettingsDto.html" data-type="entity-link" >UpdateHouseGameSettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLeaderboardScheduleRequest.html" data-type="entity-link" >UpdateLeaderboardScheduleRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMainGameGridDto.html" data-type="entity-link" >UpdateMainGameGridDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNoteRequestDto.html" data-type="entity-link" >UpdateNoteRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePromoFirstDepositRequest.html" data-type="entity-link" >UpdatePromoFirstDepositRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProviderDto.html" data-type="entity-link" >UpdateProviderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSingleRoleUserDto.html" data-type="entity-link" >UpdateSingleRoleUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSiteConfigDto.html" data-type="entity-link" >UpdateSiteConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserBalanceDto.html" data-type="entity-link" >UpdateUserBalanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserByAdminDto.html" data-type="entity-link" >UpdateUserByAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserKycByAdminDto.html" data-type="entity-link" >UpdateUserKycByAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserKycDto.html" data-type="entity-link" >UpdateUserKycDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserKycLevelDto.html" data-type="entity-link" >UpdateUserKycLevelDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPermissionsDto.html" data-type="entity-link" >UpdateUserPermissionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserRolesDto.html" data-type="entity-link" >UpdateUserRolesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpgradeUserKycRequestDto.html" data-type="entity-link" >UpgradeUserKycRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPromoCodeRequest.html" data-type="entity-link" >UpsertPromoCodeRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPromoGameWhitelistRequest.html" data-type="entity-link" >UpsertPromoGameWhitelistRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAdminAuditRequestDto.html" data-type="entity-link" >UserAdminAuditRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAdminStatsDto.html" data-type="entity-link" >UserAdminStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAuthDto.html" data-type="entity-link" >UserAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBalanceDto.html" data-type="entity-link" >UserBalanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBalanceEvoFilterDto.html" data-type="entity-link" >UserBalanceEvoFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBalanceUtils.html" data-type="entity-link" >UserBalanceUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBanDto.html" data-type="entity-link" >UserBanDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBasicDto.html" data-type="entity-link" >UserBasicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserFairnessSeedsActivePublicDto.html" data-type="entity-link" >UserFairnessSeedsActivePublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserFairnessSeedsDto.html" data-type="entity-link" >UserFairnessSeedsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserFilterDto.html" data-type="entity-link" >UserFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserIdDto.html" data-type="entity-link" >UserIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInactiveFairnessSeedsDto.html" data-type="entity-link" >UserInactiveFairnessSeedsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserKycDto.html" data-type="entity-link" >UserKycDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserKycPublicDto.html" data-type="entity-link" >UserKycPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserKycStatusDto.html" data-type="entity-link" >UserKycStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserKycVerificationRequestDto.html" data-type="entity-link" >UserKycVerificationRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserKycWithRequestsDto.html" data-type="entity-link" >UserKycWithRequestsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMyStatsDto.html" data-type="entity-link" >UserMyStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNoteDto.html" data-type="entity-link" >UserNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPermissionDto.html" data-type="entity-link" >UserPermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPromoCodeDto.html" data-type="entity-link" >UserPromoCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPromoCodeProgressDto.html" data-type="entity-link" >UserPromoCodeProgressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPromoCodeProgressPublicDto.html" data-type="entity-link" >UserPromoCodeProgressPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPromoCodePublicDto.html" data-type="entity-link" >UserPromoCodePublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPromoCodeShortDto.html" data-type="entity-link" >UserPromoCodeShortDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPublicStatsDto.html" data-type="entity-link" >UserPublicStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRoleDto.html" data-type="entity-link" >UserRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSessionDto.html" data-type="entity-link" >UserSessionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserShortInfoDto.html" data-type="entity-link" >UserShortInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserShortPrivate.html" data-type="entity-link" >UserShortPrivate</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserShortPrivateDto.html" data-type="entity-link" >UserShortPrivateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserShortPublicDto.html" data-type="entity-link" >UserShortPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersOnlineUpdateDto.html" data-type="entity-link" >UsersOnlineUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSportsBookDeposit.html" data-type="entity-link" >UserSportsBookDeposit</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStatsDto.html" data-type="entity-link" >UserStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStatsDto-1.html" data-type="entity-link" >UserStatsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStatsIncreaseDto.html" data-type="entity-link" >UserStatsIncreaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStatsUsdDto.html" data-type="entity-link" >UserStatsUsdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStatsUsdFilterDto.html" data-type="entity-link" >UserStatsUsdFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStatsUsdForAffiliateDto.html" data-type="entity-link" >UserStatsUsdForAffiliateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStatsUsdIncreaseDto.html" data-type="entity-link" >UserStatsUsdIncreaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersTransactionsStatsRequestDto.html" data-type="entity-link" >UsersTransactionsStatsRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersTransactionsStatsResponseDto.html" data-type="entity-link" >UsersTransactionsStatsResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserTipByAdminDto.html" data-type="entity-link" >UserTipByAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUsdBalanceAdminDto.html" data-type="entity-link" >UserUsdBalanceAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUtils.html" data-type="entity-link" >UserUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserVaultBalanceChangeDto.html" data-type="entity-link" >UserVaultBalanceChangeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserVaultBalanceDto.html" data-type="entity-link" >UserVaultBalanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWithPasswordDto.html" data-type="entity-link" >UserWithPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateWithdrawAddressDto.html" data-type="entity-link" >ValidateWithdrawAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyMfaDto.html" data-type="entity-link" >VerifyMfaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyMfaResponseDto.html" data-type="entity-link" >VerifyMfaResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyWithdrawArgs.html" data-type="entity-link" >VerifyWithdrawArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/VipApplicationAdminDto.html" data-type="entity-link" >VipApplicationAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VipApplicationAdminUpdateDto.html" data-type="entity-link" >VipApplicationAdminUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VipApplicationDto.html" data-type="entity-link" >VipApplicationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VipProgramAdapter.html" data-type="entity-link" >VipProgramAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/VipUserResponseDto.html" data-type="entity-link" >VipUserResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCreateDto.html" data-type="entity-link" >WalletCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletGetDto.html" data-type="entity-link" >WalletGetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WildcardsIoAdapter.html" data-type="entity-link" >WildcardsIoAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawalsBlockDto.html" data-type="entity-link" >WithdrawalsBlockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawalsBlockRequestDto.html" data-type="entity-link" >WithdrawalsBlockRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawApproveDto.html" data-type="entity-link" >WithdrawApproveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawCreateDto.html" data-type="entity-link" >WithdrawCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawCreateRequestDto.html" data-type="entity-link" >WithdrawCreateRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawDto.html" data-type="entity-link" >WithdrawDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawPublicDto.html" data-type="entity-link" >WithdrawPublicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawRecordDto.html" data-type="entity-link" >WithdrawRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawRejectDto.html" data-type="entity-link" >WithdrawRejectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawRetryDto.html" data-type="entity-link" >WithdrawRetryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawStatsDto.html" data-type="entity-link" >WithdrawStatsDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountingEventService.html" data-type="entity-link" >AccountingEventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountingRepository.html" data-type="entity-link" >AccountingRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountingService.html" data-type="entity-link" >AccountingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminGamblingLimitsService.html" data-type="entity-link" >AdminGamblingLimitsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminLoggerInterceptor.html" data-type="entity-link" >AdminLoggerInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminLoggerRepository.html" data-type="entity-link" >AdminLoggerRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminLoggerService.html" data-type="entity-link" >AdminLoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminPromoService.html" data-type="entity-link" >AdminPromoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminSelfExclusionService.html" data-type="entity-link" >AdminSelfExclusionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminTipsQuery.html" data-type="entity-link" >AdminTipsQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminTipsRepository.html" data-type="entity-link" >AdminTipsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminTipsService.html" data-type="entity-link" >AdminTipsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateActiveReferralsCountQuery.html" data-type="entity-link" >AffiliateActiveReferralsCountQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateAdminTipsQuery.html" data-type="entity-link" >AffiliateAdminTipsQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateAggregatedInfoRepository.html" data-type="entity-link" >AffiliateAggregatedInfoRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateAggregatedInfoService.html" data-type="entity-link" >AffiliateAggregatedInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateClaimedQuery.html" data-type="entity-link" >AffiliateClaimedQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateCodeRepository.html" data-type="entity-link" >AffiliateCodeRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateCodeService.html" data-type="entity-link" >AffiliateCodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateDepositsQuery.html" data-type="entity-link" >AffiliateDepositsQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateExternalRepository.html" data-type="entity-link" >AffiliateExternalRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateExternalService.html" data-type="entity-link" >AffiliateExternalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateReferralsCountQuery.html" data-type="entity-link" >AffiliateReferralsCountQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateRepository.html" data-type="entity-link" >AffiliateRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateRewardTakenQuery.html" data-type="entity-link" >AffiliateRewardTakenQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateService.html" data-type="entity-link" >AffiliateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateStreamerRepository.html" data-type="entity-link" >AffiliateStreamerRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateStreamerService.html" data-type="entity-link" >AffiliateStreamerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateTotalWithdrawalsQuery.html" data-type="entity-link" >AffiliateTotalWithdrawalsQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateUserStatsRepository.html" data-type="entity-link" >AffiliateUserStatsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AffiliateUserStatsService.html" data-type="entity-link" >AffiliateUserStatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnonymousStrategy.html" data-type="entity-link" >AnonymousStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiKeyAuthGuard.html" data-type="entity-link" >ApiKeyAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiKeyRepository.html" data-type="entity-link" >ApiKeyRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiKeyService.html" data-type="entity-link" >ApiKeyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArbitrageDepositsFactory.html" data-type="entity-link" >ArbitrageDepositsFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArbitrageFtdFactory.html" data-type="entity-link" >ArbitrageFtdFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArbitrageRegistrationFactory.html" data-type="entity-link" >ArbitrageRegistrationFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthRpcContextInterceptor.html" data-type="entity-link" >AuthRpcContextInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService-1.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BackendService.html" data-type="entity-link" >BackendService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BalanceEmailService.html" data-type="entity-link" >BalanceEmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BanGuard.html" data-type="entity-link" >BanGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchAggregationService.html" data-type="entity-link" >BatchAggregationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetAmountValidationService.html" data-type="entity-link" >BetAmountValidationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetCrudService.html" data-type="entity-link" >BetCrudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetEventService.html" data-type="entity-link" >BetEventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetMaxProfitService.html" data-type="entity-link" >BetMaxProfitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetQueueProducer.html" data-type="entity-link" >BetQueueProducer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetRepository.html" data-type="entity-link" >BetRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetRepository-1.html" data-type="entity-link" >BetRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetService.html" data-type="entity-link" >BetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetService-1.html" data-type="entity-link" >BetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetsRepository.html" data-type="entity-link" >BetsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BetsService.html" data-type="entity-link" >BetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BGamingApiService.html" data-type="entity-link" >BGamingApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BGamingLoggingInterceptor.html" data-type="entity-link" >BGamingLoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BGamingWalletService.html" data-type="entity-link" >BGamingWalletService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackDefaultUserActionWorkerService.html" data-type="entity-link" >BlackjackDefaultUserActionWorkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackGameLogicService.html" data-type="entity-link" >BlackjackGameLogicService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackInitGameWorkerService.html" data-type="entity-link" >BlackjackInitGameWorkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackMapper.html" data-type="entity-link" >BlackjackMapper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackNotifierService.html" data-type="entity-link" >BlackjackNotifierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackRepository.html" data-type="entity-link" >BlackjackRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackRepository-1.html" data-type="entity-link" >BlackjackRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackService.html" data-type="entity-link" >BlackjackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlackjackService-1.html" data-type="entity-link" >BlackjackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotActivityService.html" data-type="entity-link" >BotActivityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotBetCasinoService.html" data-type="entity-link" >BotBetCasinoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotRedisClient.html" data-type="entity-link" >BotRedisClient</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotSessionService.html" data-type="entity-link" >BotSessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotSessionTasksService.html" data-type="entity-link" >BotSessionTasksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotsRepository.html" data-type="entity-link" >BotsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotsUserControlRepository.html" data-type="entity-link" >BotsUserControlRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BotWinCasinoService.html" data-type="entity-link" >BotWinCasinoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CasualStrategy.html" data-type="entity-link" >CasualStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CCPaymentService.html" data-type="entity-link" >CCPaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CCPaymentWebhookService.html" data-type="entity-link" >CCPaymentWebhookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChallengeCrudService.html" data-type="entity-link" >ChallengeCrudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChallengeRepository.html" data-type="entity-link" >ChallengeRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChallengeService.html" data-type="entity-link" >ChallengeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatDataService.html" data-type="entity-link" >ChatDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatRepository.html" data-type="entity-link" >ChatRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatService.html" data-type="entity-link" >ChatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoingeckoProviderApi.html" data-type="entity-link" >CoingeckoProviderApi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComingSoonGuard.html" data-type="entity-link" >ComingSoonGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComingSoonService.html" data-type="entity-link" >ComingSoonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigSingleton.html" data-type="entity-link" >ConfigSingleton</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryRepository.html" data-type="entity-link" >CountryRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryService.html" data-type="entity-link" >CountryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CronService.html" data-type="entity-link" >CronService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyRepository.html" data-type="entity-link" >CurrencyRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyService.html" data-type="entity-link" >CurrencyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardCombinedService.html" data-type="entity-link" >DashboardCombinedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardRepository.html" data-type="entity-link" >DashboardRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardSeparatedService.html" data-type="entity-link" >DashboardSeparatedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link" >DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DebugAuthService.html" data-type="entity-link" >DebugAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DebugGr8Service.html" data-type="entity-link" >DebugGr8Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DebugNotificationService.html" data-type="entity-link" >DebugNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DebugNowpaymentsService.html" data-type="entity-link" >DebugNowpaymentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DebugTestUserService.html" data-type="entity-link" >DebugTestUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositHandler.html" data-type="entity-link" >DepositHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositPartialResettleBetStrategy.html" data-type="entity-link" >DepositPartialResettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositPartialSettleBetStrategy.html" data-type="entity-link" >DepositPartialSettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositRepository.html" data-type="entity-link" >DepositRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositResettleBetStrategy.html" data-type="entity-link" >DepositResettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositService.html" data-type="entity-link" >DepositService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositSettleBetStrategy.html" data-type="entity-link" >DepositSettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositStrategy.html" data-type="entity-link" >DepositStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepositStrategyFactory.html" data-type="entity-link" >DepositStrategyFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DiceService.html" data-type="entity-link" >DiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DoubleLoyaltyService.html" data-type="entity-link" >DoubleLoyaltyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailSenderService.html" data-type="entity-link" >EmailSenderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventsGateway.html" data-type="entity-link" >EventsGateway</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EvoGamesApiService.html" data-type="entity-link" >EvoGamesApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EvoGamesLoggingInterceptor.html" data-type="entity-link" >EvoGamesLoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EvoGamesWalletService.html" data-type="entity-link" >EvoGamesWalletService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExchangeRatesRepository.html" data-type="entity-link" >ExchangeRatesRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExchangeRatesService.html" data-type="entity-link" >ExchangeRatesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FaqRepository.html" data-type="entity-link" >FaqRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FaqService.html" data-type="entity-link" >FaqService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FastTrackAuthService.html" data-type="entity-link" >FastTrackAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FastTrackBonusService.html" data-type="entity-link" >FastTrackBonusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FastTrackCasinoService.html" data-type="entity-link" >FastTrackCasinoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FastTrackCommandService.html" data-type="entity-link" >FastTrackCommandService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FastTrackDebugInspectionService.html" data-type="entity-link" >FastTrackDebugInspectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FastTrackQueryService.html" data-type="entity-link" >FastTrackQueryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FastTrackRabbitMQProducer.html" data-type="entity-link" >FastTrackRabbitMQProducer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirstTimeDepositAmountAndCountQuery.html" data-type="entity-link" >FirstTimeDepositAmountAndCountQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FromVaultHandler.html" data-type="entity-link" >FromVaultHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamblingLimitsRepository.html" data-type="entity-link" >GamblingLimitsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamblingLimitsService.html" data-type="entity-link" >GamblingLimitsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamesAdminService.html" data-type="entity-link" >GamesAdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamesBetTotalCountAverageQuery.html" data-type="entity-link" >GamesBetTotalCountAverageQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamesChartsQuery.html" data-type="entity-link" >GamesChartsQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamesHydrateService.html" data-type="entity-link" >GamesHydrateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamesRepository.html" data-type="entity-link" >GamesRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamesService.html" data-type="entity-link" >GamesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameStatsRepository.html" data-type="entity-link" >GameStatsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayClientFactory.html" data-type="entity-link" >GatewayClientFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayValidationInterceptor.html" data-type="entity-link" >GatewayValidationInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeetestCaptchaService.html" data-type="entity-link" >GeetestCaptchaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralStatsRepository.html" data-type="entity-link" >GeneralStatsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeoCheckService.html" data-type="entity-link" >GeoCheckService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GgrCommissionRepository.html" data-type="entity-link" >GgrCommissionRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GgrCommissionService.html" data-type="entity-link" >GgrCommissionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GgrGamesQuery.html" data-type="entity-link" >GgrGamesQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GgrQuery.html" data-type="entity-link" >GgrQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleOauthGuard.html" data-type="entity-link" >GoogleOauthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleStrategy.html" data-type="entity-link" >GoogleStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HighrollerStrategy.html" data-type="entity-link" >HighrollerStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HouseGamesService.html" data-type="entity-link" >HouseGamesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdempotencyGatewayInterceptor.html" data-type="entity-link" >IdempotencyGatewayInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageUploadService.html" data-type="entity-link" >ImageUploadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshGuard.html" data-type="entity-link" >JwtRefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshStrategy.html" data-type="entity-link" >JwtRefreshStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KenoService.html" data-type="entity-link" >KenoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KycCrudService.html" data-type="entity-link" >KycCrudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KycRepository.html" data-type="entity-link" >KycRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KycService.html" data-type="entity-link" >KycService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaderboardCrudService.html" data-type="entity-link" >LeaderboardCrudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaderBoardQuery.html" data-type="entity-link" >LeaderBoardQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaderboardQueueProducer.html" data-type="entity-link" >LeaderboardQueueProducer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaderboardRepository.html" data-type="entity-link" >LeaderboardRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaderboardService.html" data-type="entity-link" >LeaderboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LimboService.html" data-type="entity-link" >LimboService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveBetsCacheRepository.html" data-type="entity-link" >LiveBetsCacheRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveBetsCacheService.html" data-type="entity-link" >LiveBetsCacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveBetsNotificationService.html" data-type="entity-link" >LiveBetsNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveBetsRepository.html" data-type="entity-link" >LiveBetsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveBetsService.html" data-type="entity-link" >LiveBetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveBetsUtils.html" data-type="entity-link" >LiveBetsUtils</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link" >LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageCensureService.html" data-type="entity-link" >MessageCensureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaMiddleware.html" data-type="entity-link" >MetaMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MinesRepository.html" data-type="entity-link" >MinesRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MinesService.html" data-type="entity-link" >MinesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonkeyRunRepository.html" data-type="entity-link" >MonkeyRunRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonkeyRunService.html" data-type="entity-link" >MonkeyRunService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link" >NetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NgrQuery.html" data-type="entity-link" >NgrQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotesService.html" data-type="entity-link" >NotesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationEmailService.html" data-type="entity-link" >NotificationEmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NowpaymentsApiService.html" data-type="entity-link" >NowpaymentsApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NowpaymentsService.html" data-type="entity-link" >NowpaymentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NowpaymentsWebhookService.html" data-type="entity-link" >NowpaymentsWebhookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OnlineQuery.html" data-type="entity-link" >OnlineQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OnlineTrackerService.html" data-type="entity-link" >OnlineTrackerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OnlineTrackerService-1.html" data-type="entity-link" >OnlineTrackerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OptionalAuthGuard.html" data-type="entity-link" >OptionalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentProviderRepository.html" data-type="entity-link" >PaymentProviderRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentProviderService.html" data-type="entity-link" >PaymentProviderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlinkoService.html" data-type="entity-link" >PlinkoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8AuthService.html" data-type="entity-link" >Pm8AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8CacheManager.html" data-type="entity-link" >Pm8CacheManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8DataApi.html" data-type="entity-link" >Pm8DataApi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8DataApiHydrateService.html" data-type="entity-link" >Pm8DataApiHydrateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8LaunchService.html" data-type="entity-link" >Pm8LaunchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8LoggingInterceptor.html" data-type="entity-link" >Pm8LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8PlayerService.html" data-type="entity-link" >Pm8PlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8RtService.html" data-type="entity-link" >Pm8RtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8SignatureService.html" data-type="entity-link" >Pm8SignatureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8SignatureV1Service.html" data-type="entity-link" >Pm8SignatureV1Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8SignatureV2Service.html" data-type="entity-link" >Pm8SignatureV2Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8TestSessionAction.html" data-type="entity-link" >Pm8TestSessionAction</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8TransactionBetAction.html" data-type="entity-link" >Pm8TransactionBetAction</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8TransactionPromoWinAction.html" data-type="entity-link" >Pm8TransactionPromoWinAction</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8TransactionRefundAction.html" data-type="entity-link" >Pm8TransactionRefundAction</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8TransactionService.html" data-type="entity-link" >Pm8TransactionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8TransactionTournamentWinAction.html" data-type="entity-link" >Pm8TransactionTournamentWinAction</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8TransactionWinAction.html" data-type="entity-link" >Pm8TransactionWinAction</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Pm8ValidationService.html" data-type="entity-link" >Pm8ValidationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileEmailService.html" data-type="entity-link" >ProfileEmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileNotifierService.html" data-type="entity-link" >ProfileNotifierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfitLossQuery.html" data-type="entity-link" >ProfitLossQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromoEffectService.html" data-type="entity-link" >PromoEffectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromoEventHandlerService.html" data-type="entity-link" >PromoEventHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromoGameWhitelistRepository.html" data-type="entity-link" >PromoGameWhitelistRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromoRepository.html" data-type="entity-link" >PromoRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromoService.html" data-type="entity-link" >PromoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromoTasksService.html" data-type="entity-link" >PromoTasksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromoValidatorService.html" data-type="entity-link" >PromoValidatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProvablyFairRepository.html" data-type="entity-link" >ProvablyFairRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProvablyFairService.html" data-type="entity-link" >ProvablyFairService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProviderGeneralStats.html" data-type="entity-link" >ProviderGeneralStats</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RakeBackProgramQuery.html" data-type="entity-link" >RakeBackProgramQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RakebackRepository.html" data-type="entity-link" >RakebackRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RakebackService.html" data-type="entity-link" >RakebackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecaptchaGuard.html" data-type="entity-link" >RecaptchaGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecaptchaService.html" data-type="entity-link" >RecaptchaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedisThrottlerStorage.html" data-type="entity-link" >RedisThrottlerStorage</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReferralFtdQuery.html" data-type="entity-link" >ReferralFtdQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReferralGgrQuery.html" data-type="entity-link" >ReferralGgrQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReferralTotalWageredQuery.html" data-type="entity-link" >ReferralTotalWageredQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistrationInfoRepository.html" data-type="entity-link" >RegistrationInfoRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistrationInfoService.html" data-type="entity-link" >RegistrationInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseAppNameInterceptor.html" data-type="entity-link" >ResponseAppNameInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RollbackStrategy.html" data-type="entity-link" >RollbackStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouletteService.html" data-type="entity-link" >RouletteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RpcContextInterceptor.html" data-type="entity-link" >RpcContextInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RtNotificationService.html" data-type="entity-link" >RtNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelfExcludeRepository.html" data-type="entity-link" >SelfExcludeRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelfExclusionService.html" data-type="entity-link" >SelfExclusionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendGridEngineService.html" data-type="entity-link" >SendGridEngineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SerializeDtoInterceptor.html" data-type="entity-link" >SerializeDtoInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionQueueProducer.html" data-type="entity-link" >SessionQueueProducer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionRepository.html" data-type="entity-link" >SessionRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionSchedulerProcessor.html" data-type="entity-link" >SessionSchedulerProcessor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionSerializer.html" data-type="entity-link" >SessionSerializer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionService.html" data-type="entity-link" >SessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionService-1.html" data-type="entity-link" >SessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionUpdateQueueProcessor.html" data-type="entity-link" >SessionUpdateQueueProcessor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteConfigService.html" data-type="entity-link" >SiteConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SkinDeckCommonService.html" data-type="entity-link" >SkinDeckCommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SkinDeckDepositsService.html" data-type="entity-link" >SkinDeckDepositsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SlotGamesService.html" data-type="entity-link" >SlotGamesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SlotRndGenService.html" data-type="entity-link" >SlotRndGenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoftswissCdnApi.html" data-type="entity-link" >SoftswissCdnApi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpeedRouletteApiService.html" data-type="entity-link" >SpeedRouletteApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpeedRouletteConfigService.html" data-type="entity-link" >SpeedRouletteConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpeedRouletteNotifierService.html" data-type="entity-link" >SpeedRouletteNotifierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpeedRouletteRepository.html" data-type="entity-link" >SpeedRouletteRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpeedRouletteService.html" data-type="entity-link" >SpeedRouletteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpeedRouletteStateService.html" data-type="entity-link" >SpeedRouletteStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SportbookAuthService.html" data-type="entity-link" >SportbookAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SportbookS2sService.html" data-type="entity-link" >SportbookS2sService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SportbookService.html" data-type="entity-link" >SportbookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SportsbookTransactionService.html" data-type="entity-link" >SportsbookTransactionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StableStrategy.html" data-type="entity-link" >StableStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SteamAuthOpenIdService.html" data-type="entity-link" >SteamAuthOpenIdService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StrategyFactoryService.html" data-type="entity-link" >StrategyFactoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SumSubLevelsService.html" data-type="entity-link" >SumSubLevelsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TelegramCallbackActionsService.html" data-type="entity-link" >TelegramCallbackActionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TelegramNotificationService.html" data-type="entity-link" >TelegramNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TelegramRepository.html" data-type="entity-link" >TelegramRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TelegramService.html" data-type="entity-link" >TelegramService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestCronService.html" data-type="entity-link" >TestCronService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestPaymentService.html" data-type="entity-link" >TestPaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TipsRepository.html" data-type="entity-link" >TipsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TipsService.html" data-type="entity-link" >TipsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TmtDataApi.html" data-type="entity-link" >TmtDataApi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TmtDepositsStrategy.html" data-type="entity-link" >TmtDepositsStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TmtRegistrationStrategy.html" data-type="entity-link" >TmtRegistrationStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToVaultHandler.html" data-type="entity-link" >ToVaultHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrafficArbitrageRepository.html" data-type="entity-link" >TrafficArbitrageRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrafficArbitrageService.html" data-type="entity-link" >TrafficArbitrageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionRepository.html" data-type="entity-link" >TransactionRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionService.html" data-type="entity-link" >TransactionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionStrategyFactory.html" data-type="entity-link" >TransactionStrategyFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TricksterStrategy.html" data-type="entity-link" >TricksterStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserBalanceRepository.html" data-type="entity-link" >UserBalanceRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserBalanceService.html" data-type="entity-link" >UserBalanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserLimitService.html" data-type="entity-link" >UserLimitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserPromoProgressRepository.html" data-type="entity-link" >UserPromoProgressRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserPromoRepository.html" data-type="entity-link" >UserPromoRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository-1.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository-2.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService-1.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService-2.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsMigrateQueueProcessor.html" data-type="entity-link" >UserStatsMigrateQueueProcessor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsMigrateQueueProducer.html" data-type="entity-link" >UserStatsMigrateQueueProducer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsMigrateRepository.html" data-type="entity-link" >UserStatsMigrateRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsMigrateService.html" data-type="entity-link" >UserStatsMigrateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsQueueProcessor.html" data-type="entity-link" >UserStatsQueueProcessor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsQueueProducer.html" data-type="entity-link" >UserStatsQueueProducer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsRepository.html" data-type="entity-link" >UserStatsRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsService.html" data-type="entity-link" >UserStatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsUsdRepository.html" data-type="entity-link" >UserStatsUsdRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatsUsdService.html" data-type="entity-link" >UserStatsUsdService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTipsQuery.html" data-type="entity-link" >UserTipsQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTotalBalanceQuery.html" data-type="entity-link" >UserTotalBalanceQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTotalCountQuery.html" data-type="entity-link" >UserTotalCountQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTotalDepositsAndAverageQuery.html" data-type="entity-link" >UserTotalDepositsAndAverageQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTotalSignupQuery.html" data-type="entity-link" >UserTotalSignupQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTotalWageredQuery.html" data-type="entity-link" >UserTotalWageredQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTotalWithdrawalsQuery.html" data-type="entity-link" >UserTotalWithdrawalsQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VipApplicationAdminService.html" data-type="entity-link" >VipApplicationAdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VipApplicationService.html" data-type="entity-link" >VipApplicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VipProgramRepository.html" data-type="entity-link" >VipProgramRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletRepository.html" data-type="entity-link" >WalletRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletService.html" data-type="entity-link" >WalletService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalCancelSettleBetStrategy.html" data-type="entity-link" >WithdrawalCancelSettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalCreateBetStrategy.html" data-type="entity-link" >WithdrawalCreateBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalPartialCancelSettleBetStrategy.html" data-type="entity-link" >WithdrawalPartialCancelSettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalPartialResettleBetStrategy.html" data-type="entity-link" >WithdrawalPartialResettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalResettleBetStrategy.html" data-type="entity-link" >WithdrawalResettleBetStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalsBlockRepository.html" data-type="entity-link" >WithdrawalsBlockRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalsBlockService.html" data-type="entity-link" >WithdrawalsBlockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalStrategy.html" data-type="entity-link" >WithdrawalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawalStrategyFactory.html" data-type="entity-link" >WithdrawalStrategyFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawCheckService.html" data-type="entity-link" >WithdrawCheckService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawHandler.html" data-type="entity-link" >WithdrawHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawRepository.html" data-type="entity-link" >WithdrawRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WithdrawService.html" data-type="entity-link" >WithdrawService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WsThrottlerGuard.html" data-type="entity-link" >WsThrottlerGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WsThrottlerService.html" data-type="entity-link" >WsThrottlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/XmrDataApi.html" data-type="entity-link" >XmrDataApi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/XmrDepositsStrategy.html" data-type="entity-link" >XmrDepositsStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/XmrRegistrationStrategy.html" data-type="entity-link" >XmrRegistrationStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/FastTrackGuard.html" data-type="entity-link" >FastTrackGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/OtpGuard.html" data-type="entity-link" >OtpGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/Pm8OperatorAuthGuard.html" data-type="entity-link" >Pm8OperatorAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/Pm8SignatureGuard.html" data-type="entity-link" >Pm8SignatureGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SessionTokenGuard.html" data-type="entity-link" >SessionTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SkinDeckCallbackGuard.html" data-type="entity-link" >SkinDeckCallbackGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SlotsPM8IpGuard.html" data-type="entity-link" >SlotsPM8IpGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SportsbookHeaderGuard.html" data-type="entity-link" >SportsbookHeaderGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SportsbookIpGuard.html" data-type="entity-link" >SportsbookIpGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SteamAuthOpenIdGuard.html" data-type="entity-link" >SteamAuthOpenIdGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SteamIsConnectedGuard.html" data-type="entity-link" >SteamIsConnectedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/VipExistsGuard.html" data-type="entity-link" >VipExistsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/WebhookGuard.html" data-type="entity-link" >WebhookGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AffiliatesSiteConfig.html" data-type="entity-link" >AffiliatesSiteConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticatedRequest.html" data-type="entity-link" >AuthenticatedRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticateUserBodyModel.html" data-type="entity-link" >AuthenticateUserBodyModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticateUserResponseModel.html" data-type="entity-link" >AuthenticateUserResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BalanceAmount.html" data-type="entity-link" >BalanceAmount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BatchRange.html" data-type="entity-link" >BatchRange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Behavior.html" data-type="entity-link" >Behavior</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BetResp.html" data-type="entity-link" >BetResp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BetRespParams.html" data-type="entity-link" >BetRespParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BetStrategy.html" data-type="entity-link" >BetStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlackjackGameConfig.html" data-type="entity-link" >BlackjackGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlackjackPayoutModel.html" data-type="entity-link" >BlackjackPayoutModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BotBetContext.html" data-type="entity-link" >BotBetContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BotBetProcess.html" data-type="entity-link" >BotBetProcess</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BotModel.html" data-type="entity-link" >BotModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BotUpdatedBalance.html" data-type="entity-link" >BotUpdatedBalance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BufferGeneratorArgs.html" data-type="entity-link" >BufferGeneratorArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ByteGeneratorResult.html" data-type="entity-link" >ByteGeneratorResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CallbackBodyModel.html" data-type="entity-link" >CallbackBodyModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChatAdminAction.html" data-type="entity-link" >ChatAdminAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChatAdminDeleteMessageAction.html" data-type="entity-link" >ChatAdminDeleteMessageAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChatAdminUpdateRoomSettingsAction.html" data-type="entity-link" >ChatAdminUpdateRoomSettingsAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CodeGeneratorOptions.html" data-type="entity-link" >CodeGeneratorOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommonResponseModel.html" data-type="entity-link" >CommonResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Core.html" data-type="entity-link" >Core</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateTradeBodyModel.html" data-type="entity-link" >CreateTradeBodyModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateTradeResponseModel.html" data-type="entity-link" >CreateTradeResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credential.html" data-type="entity-link" >Credential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credential-1.html" data-type="entity-link" >Credential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DiceGameConfig.html" data-type="entity-link" >DiceGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailMethodContextMap.html" data-type="entity-link" >EmailMethodContextMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailResponse.html" data-type="entity-link" >EmailResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailServicesMap.html" data-type="entity-link" >EmailServicesMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FastTrackBonusHeaders.html" data-type="entity-link" >FastTrackBonusHeaders</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FindEntriesArgsBySubId.html" data-type="entity-link" >FindEntriesArgsBySubId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FindEntriesArgsBySubIdAndProvider.html" data-type="entity-link" >FindEntriesArgsBySubIdAndProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FindEntriesArgsByUser.html" data-type="entity-link" >FindEntriesArgsByUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FindEntriesArgsByUserAndProvider.html" data-type="entity-link" >FindEntriesArgsByUserAndProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GameChartData.html" data-type="entity-link" >GameChartData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetMarketInventoryQueryModel.html" data-type="entity-link" >GetMarketInventoryQueryModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetMarketInventoryResponseModel.html" data-type="entity-link" >GetMarketInventoryResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetUserInventoryQueryModel.html" data-type="entity-link" >GetUserInventoryQueryModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetUserInventoryResponseModel.html" data-type="entity-link" >GetUserInventoryResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetUserTradeHistoryQueryModel.html" data-type="entity-link" >GetUserTradeHistoryQueryModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupedBetResult.html" data-type="entity-link" >GroupedBetResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HouseGameSettings.html" data-type="entity-link" >HouseGameSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IArbitrageDepositsStrategy.html" data-type="entity-link" >IArbitrageDepositsStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IArbitrageFtdStrategy.html" data-type="entity-link" >IArbitrageFtdStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IArbitrageRegistrationStrategy.html" data-type="entity-link" >IArbitrageRegistrationStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBalanceEmailService.html" data-type="entity-link" >IBalanceEmailService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILogInfo.html" data-type="entity-link" >ILogInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InitialBlackjackCardsDto.html" data-type="entity-link" >InitialBlackjackCardsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INotificationEmailService.html" data-type="entity-link" >INotificationEmailService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InventoryItemModel.html" data-type="entity-link" >InventoryItemModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfileEmailService.html" data-type="entity-link" >IProfileEmailService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IsDateAfterOptions.html" data-type="entity-link" >IsDateAfterOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISerializable.html" data-type="entity-link" >ISerializable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISiteConfig.html" data-type="entity-link" >ISiteConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IsJsonArrayStringOptions.html" data-type="entity-link" >IsJsonArrayStringOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionDepositStrategy.html" data-type="entity-link" >ITransactionDepositStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionHandler.html" data-type="entity-link" >ITransactionHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionStrategy.html" data-type="entity-link" >ITransactionStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionWithdrawalStrategy.html" data-type="entity-link" >ITransactionWithdrawalStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWalletProvider.html" data-type="entity-link" >IWalletProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KenoGameConfig.html" data-type="entity-link" >KenoGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LimboGameConfig.html" data-type="entity-link" >LimboGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MailEngineInterface.html" data-type="entity-link" >MailEngineInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MethodMetadata.html" data-type="entity-link" >MethodMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MinesGameConfig.html" data-type="entity-link" >MinesGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonkeyRunGameConfig.html" data-type="entity-link" >MonkeyRunGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OfferModel.html" data-type="entity-link" >OfferModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpenIdParams.html" data-type="entity-link" >OpenIdParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OptionAsyncFactory.html" data-type="entity-link" >OptionAsyncFactory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OptionsParams.html" data-type="entity-link" >OptionsParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageMetaDtoParameters.html" data-type="entity-link" >PageMetaDtoParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PayTableEntry.html" data-type="entity-link" >PayTableEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlinkoGameConfig.html" data-type="entity-link" >PlinkoGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pm8DataApiConfig.html" data-type="entity-link" >Pm8DataApiConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pm8IdempotencyOptions.html" data-type="entity-link" >Pm8IdempotencyOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileContext.html" data-type="entity-link" >ProfileContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProvidersStats.html" data-type="entity-link" >ProvidersStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryExecuteInterface.html" data-type="entity-link" >QueryExecuteInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomDiceArgs.html" data-type="entity-link" >RandomDiceArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomGeneratorArgs.html" data-type="entity-link" >RandomGeneratorArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomGeneratorModule.html" data-type="entity-link" >RandomGeneratorModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomGeneratorResult.html" data-type="entity-link" >RandomGeneratorResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomKenoArgs.html" data-type="entity-link" >RandomKenoArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomLimboArgs.html" data-type="entity-link" >RandomLimboArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomMinesArgs.html" data-type="entity-link" >RandomMinesArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomMonkeyRunArgs.html" data-type="entity-link" >RandomMonkeyRunArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomPlinkoArgs.html" data-type="entity-link" >RandomPlinkoArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomRouletteArgs.html" data-type="entity-link" >RandomRouletteArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomSpeedRouletteArgs.html" data-type="entity-link" >RandomSpeedRouletteArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RangeConfig.html" data-type="entity-link" >RangeConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouletteGameConfig.html" data-type="entity-link" >RouletteGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendgridOptionFactory.html" data-type="entity-link" >SendgridOptionFactory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerializedDiceBetPayloadDto.html" data-type="entity-link" >SerializedDiceBetPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerializedKenoBetPayload.html" data-type="entity-link" >SerializedKenoBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerializedLimboBetPayload.html" data-type="entity-link" >SerializedLimboBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerializedMinesBetPayload.html" data-type="entity-link" >SerializedMinesBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerializedMonkeyRunBetPayloadDto.html" data-type="entity-link" >SerializedMonkeyRunBetPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerializedPlinkoBetPayload.html" data-type="entity-link" >SerializedPlinkoBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerializedRouletteBetPayload.html" data-type="entity-link" >SerializedRouletteBetPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session-1.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session-2.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetNotifyOptionsStrategy.html" data-type="entity-link" >SetNotifyOptionsStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SimulationResult.html" data-type="entity-link" >SimulationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpeedRouletteGameConfig.html" data-type="entity-link" >SpeedRouletteGameConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpeedRouletteTimeConfig.html" data-type="entity-link" >SpeedRouletteTimeConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SteamUserSession.html" data-type="entity-link" >SteamUserSession</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelegramSiteConfig.html" data-type="entity-link" >TelegramSiteConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TradeModel.html" data-type="entity-link" >TradeModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransactionContext.html" data-type="entity-link" >TransactionContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Type.html" data-type="entity-link" >Type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Unleash.html" data-type="entity-link" >Unleash</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSiteConfig.html" data-type="entity-link" >UserSiteConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserStatsQueueDto.html" data-type="entity-link" >UserStatsQueueDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsersTypes.html" data-type="entity-link" >UsersTypes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WithdrawalSiteConfig.html" data-type="entity-link" >WithdrawalSiteConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});