class UserDTO:
    def init(self, username, email):
        self.username = username
        self.email = email

    def retorna_dicionario(self):
        """
        Retorna um dicionário com os dados do usuário.
        """
        return {
            "Nome de usuário": self.username,
            "E-mail": self.email
        }

    def str(self):
        return f"Usuário: (username: {self.username}| email:{self.email})"

usuarios = []
usuario1 = UserDTO(username="joao123",
                  email="joao123@example.com")
usuario2 = UserDTO(username="maria456",
                  email="maria456@example.com")

usuarios.append(usuario1)
usuarios.append(usuario2)

for usuario in usuarios:
    usuario_dados = usuario.retorna_dicionario()
    print(usuario_dados)
    print(usuario) 