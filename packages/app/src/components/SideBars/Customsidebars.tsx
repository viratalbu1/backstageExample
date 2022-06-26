import {
  Button,
  Content,
  CreateButton,
  Header,
  SupportButton,
} from '@backstage/core-components';
import {
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import { customSideBarTheme } from './customsidebarTheme';

const CreateButtonTheme = createTheme({
  palette: {
    primary: {
      main: '#774360',
    },
  },
});
const CardThemeCustom = createTheme({
  palette: {
    primary: {
      main: '#774360',
    },
  },
});
// const redTheme = createMuiTheme({ palette: { primary: red } })
export function Customsidebars() {
  return (
    <div>
      <ThemeProvider theme={customSideBarTheme}>
        <div>
          <CssBaseline>
            <Header title="SideBar Header" />
          </CssBaseline>
        </div>
        <div>
          <Grid container>
            <Grid item xs={9}>
              Component
            </Grid>
            <Grid container item xs={3}>
              <Grid item>
                <ThemeProvider theme={CreateButtonTheme}>
                  <CreateButton title="Create Component" to={'/'} />
                </ThemeProvider>
              </Grid>
              <Grid item>
                <SupportButton />
              </Grid>
            </Grid>
          </Grid>
          {/* <Ba */}
          <Content>
          <Grid container>
            <Grid item xs={9}>
              Component
            </Grid>
            <Grid container item xs={3} direction={'row-reverse'}>
              <Grid item>
                <SupportButton />
              </Grid>
              <Grid item>
                <ThemeProvider theme={CreateButtonTheme}>
                  <CreateButton title="Create Component" to={'/'} />
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
          </Content>
          <Button
            to={'/'}
            style={{ color: 'red' }}
            variant="contained"
            color="primary"
            size="large"
          >
            Hello
          </Button>
          <button>Buuton</button>
        </div>
        <div>Card #TODO</div>
      </ThemeProvider>
    </div>
  );
}
