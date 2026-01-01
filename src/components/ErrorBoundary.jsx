import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1e293b',
                    color: '#fff',
                    padding: '20px',
                    fontFamily: 'system-ui, sans-serif'
                }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚠️ Something went wrong</h1>
                    <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
                        There was an error loading the application.
                    </p>
                    <details style={{
                        backgroundColor: '#0f172a',
                        padding: '1rem',
                        borderRadius: '8px',
                        maxWidth: '600px',
                        width: '100%'
                    }}>
                        <summary style={{ cursor: 'pointer', color: '#f87171' }}>
                            Error Details (for debugging)
                        </summary>
                        <pre style={{
                            marginTop: '1rem',
                            fontSize: '0.75rem',
                            overflow: 'auto',
                            color: '#fbbf24'
                        }}>
                            {this.state.error && this.state.error.toString()}
                            {'\n\n'}
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '1.5rem',
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#3b82f6',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
