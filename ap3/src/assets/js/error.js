import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour indiquer qu'une erreur s'est produite
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez également enregistrer l'erreur dans un service de journalisation d'erreurs
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez personnaliser le rendu de l'erreur ici
      return <h1>Une erreur s'est produite. idiot</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
