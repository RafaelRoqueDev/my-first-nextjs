const Jsx = () => {
  const title = <h1>JSX é conceito central</h1>
  const objectSimply = {
    nome: 'Anna',
    idade: 5,
  }

  function subTitle() {
    return <h2>Chamar uma funçao dentro de outra função React</h2>
  }

  return (
    <div>
      {title}
      {subTitle()}
      <p>Colocando um obejto dentro de um JSX, exemplo</p>
      <p>
        {`Nome: ${objectSimply.nome}, Idade: ${objectSimply.idade} anos.`}
      </p>
    </div>
  )
}

export default Jsx
