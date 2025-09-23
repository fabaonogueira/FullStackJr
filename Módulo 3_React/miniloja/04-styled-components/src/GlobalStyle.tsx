import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{ box-sizing:border-box; }
  html,body,#root{ height:100%; }
  body{ margin:0; background:${p=>p.theme.colors.bg}; color:${p=>p.theme.colors.fg};
        font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial; }
  .container{ max-width:1200px; margin:0 auto; padding:0 16px; }
`;
