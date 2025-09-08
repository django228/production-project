import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './app/App';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import 'shared/config/i18n/i18n';
import {ErrorBoundary} from "app/providers/ErrorBoundary";

render(
    <HashRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </HashRouter>,
    document.getElementById('root'),
);
