# Ajustes na seção de Serviços — 19/07/2026

Registro das alterações visuais feitas nos cards da seção **Serviços** (`src/components/sections/services-section.tsx`) para alinhá-los ao padrão visual dos cards de **Sistemas** (`src/components/sections/systems-section.tsx`).

## Commits

| Commit | Descrição |
| --- | --- |
| `9dda4fa` | Cards com borda completa, paddings e badges no padrão dos sistemas |
| `63b8430` | Remove ícones, radius nas cantoneiras do hover e menos gap na numeração |

## O que mudou

### 1. Borda completa nos cards

Antes, cada card de serviço era separado apenas por uma linha superior (`border-t`), em layout de lista contínua. Agora cada card é um bloco fechado:

- `border border-ink-800` (bordas nos quatro lados, incluindo as laterais);
- hover escurece o fundo (`hover:bg-ink-900/40`) e clareia a borda (`hover:border-ink-600`);
- os cards ficam empilhados com `gap-6` entre si.

### 2. Radius no padrão do sistema

Os cards usam `rounded-[10px]`, o mesmo raio dos cards de sistemas, botões, chips e caixas de ícone da landing (padrão definido em `454bf9d`).

### 3. Paddings iguais aos dos sistemas

- Mobile: `p-6`
- Desktop: `lg:p-10`

Antes eram `py-12` / `lg:py-16` (sem padding horizontal próprio).

### 4. Badges abaixo da descrição

Os badges de entregáveis (`service.deliverables`) saíram da terceira coluna do grid (lateral direita, `20rem`) e passaram para dentro da coluna de conteúdo, logo abaixo da descrição, com `mt-8` — mesmo posicionamento dos highlights nos cards de sistemas. O grid passou de `lg:grid-cols-[8rem_1fr_20rem]` para duas colunas.

### 5. Remoção dos ícones

O quadradinho com ícone (`ServiceIcon`) foi removido da coluna lateral; ela agora exibe apenas a numeração do serviço. O import foi removido do componente.

> Nota: `src/components/icons/service-icon.tsx` ficou sem uso após essa mudança e pode ser removido em uma limpeza futura.

### 6. Radius nas cantoneiras do hover (`hud-frame`)

As cantoneiras em "L" que fecham sobre o card no hover (utility `hud-frame` em `src/styles/globals.css`) ganharam raio para acompanhar o arredondamento do card:

- `::before` (canto superior esquerdo): `border-top-left-radius: 10px`
- `::after` (canto inferior direito): `border-bottom-right-radius: 10px`

### 7. Menos espaço entre numeração e texto

No desktop, a coluna da numeração encolheu de `8rem` para `6rem` e o gap entre colunas caiu de `lg:gap-12` para `lg:gap-8`.

## Verificação

Cada alteração foi validada com `npm run build` (compilação, TypeScript e geração das páginas estáticas) antes do push. O deploy é automático via Vercel a cada push na branch `main`.
