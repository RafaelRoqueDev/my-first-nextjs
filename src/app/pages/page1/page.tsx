// Criando a primeira rota com a página page1

const PrimeiraPagina = () => {
  const title = <h1>Tentando endenter, sozinho:</h1>

  return (
    <div>
      {title}
      <p>
        Me parece que na após o barra na URL, o que vem é o nome da pasta do
        componente
      </p>
      <p>Ou seja:</p>
      <code>localhost:3000/pages/page1</code>
      <br />
      <strong><em>Pages:</em></strong>
      <p>É o nome da pasta principal, no qual ficam todas as pastas.</p>
      <strong><em>Page1</em></strong>
      <p>Se trata de uma página única</p>
    </div>
  )
}

export default PrimeiraPagina
