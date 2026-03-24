import { Show, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/react'

const Home = () => {
  return (
    <div>
      <header style={{ display: 'flex', gap: '10px' }}>
        {/* ผู้ใช้ยังไม่ login */}
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button>Login</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button>Register</button>
          </SignUpButton>
        </Show>

        {/* ผู้ใช้ login แล้ว */}
        <Show when="signed-in">
          <UserButton />
          <SignOutButton />
        </Show>
      </header>
    </div>
  )
}

export default Home