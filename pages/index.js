import useAuth from "../hooks/useAuth"

export default function Home() {
 const { user, signin } = useAuth();
 console.log(user)
  return (
    <div>
      <h2>Aprender programação</h2>

      <button onClick={() => signin("alexcu@gmail.com", "testeteste")}>Entrar</button>
    </div>
  )
}
