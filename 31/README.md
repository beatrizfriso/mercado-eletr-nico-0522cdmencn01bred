# Aula 31 - Revisão Entity Framework

## Crie a representação das Tabelas do Banco de dados

```cs
// 1. Implementação da representação das Tabelas do Banco de dados
public class Aluno
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Sobrenome { get; set; }

    // 1.2. Relação com Curso
    public Curso? Cursos { get; set; }
}

public class Curso
{
    public int Id { get; set; }
    public string Nome { get; set; }

    // 1.3. Relacionamento 1:N da tabela Curso com Aluno.
    // Nota: 1 Curso pode possuir N Alunos.
    public List<Aluno> Alunos { get; set; } = new List<Aluno>();
}
```

> Observe que o relacionamento aplicado é 1:N, em que **um Curso** esta presente em **N Alunos**.

## Implementação da representação do Banco de dados Escola

```cs
// 1. Implementação da representação do Banco de dados Escola
public class DbEscola: DbContext
{
    // 1.1. Adição da tabela no banco de dados.
    // Nota: Esse atributo ficará responsável por Definir/Capturar valores da tabela Alunos
    public DbSet<Aluno> Alunos { get; set; }
    // Nota: sse atributo ficará responsável por Definir/Capturar valores da tabela Cursos
    public DbSet<Curso> Cursos { get; set; }

    // 1.2. Modelagem da tabela no banco de dados.
    protected override void OnModelCreating(ModelBuilder Modelagem)
    {
        Modelagem.Entity<Aluno>(TabelaAluno =>
        {
            // 1.2.1. Definindo a PK da Tabela Aluno.
            TabelaAluno.HasKey(Coluna => Coluna.Id);
            // 1.2.2. Definindo o nome da Tabela no Database.
            TabelaAluno.ToTable("Alunos");
        });

        Modelagem.Entity<Curso>(TabelaCurso =>
        {
            // 1.2.3. Definindo a PK da Tabela Curso.
            TabelaCurso.HasKey(Coluna => Coluna.Id);
            // 1.2.4. Definindo o nome da Tabela no Database.
            TabelaCurso.ToTable("Cursos");
            // 1.2.5. Definindo o relacionamento 1:N da Tabela Curso com Alunos.
            // Nota: 1 Curso pode possuir N Alunos.
            TabelaCurso.HasMany(Tabela => Tabela.Alunos);
        });
    }

    // 1.3. Configurações de conexão com Banco de dados.
    protected override void OnConfiguring(DbContextOptionsBuilder Configuracao)
    {
        // 1.3.1. Credêncial de Conexão com Banco de dados.
        string Credencial = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Escola;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        // 1.3.2. Definição da Conexão em um Banco de dados Sql Server.
        Configuracao.UseSqlServer(Credencial);
    }
}
```

## Inicializando da conexão com Banco de dados

```cs
internal class Program
{
    static void Main(string[] args)
    {
        // 1. Inicializando Banco de dados
        var Db = new DbEscola();

        // 2. Criando e Adicionando um Curso com um Aluno no Banco de dados.
        // 2.1. Criando um Curso com um Aluno para ser adicionado o Banco de dados.
        Curso curso = new Curso
        {
            Nome = "Bootcamp C#",
            Alunos = new List<Aluno>
            {
                new Aluno
                {
                    Nome = "Willian",
                    Sobrenome = "Sant Anna"
                }
            }
        };

        // Adicionando um Curso com um Aluno no Banco de dados
        Db.Add(curso);
        Db.SaveChanges();
    }
}
```

## Resultado do Código-fonte

[Download do código-fonte](./codigo-fonte/App-Console.zip);

```cs
using Microsoft.EntityFrameworkCore;

namespace App_Console
{

    // Representação das Tabelas do Banco de dados
    public class Aluno
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }

        public Curso? Cursos { get; set; }
    }

    public class Curso
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        // Relacionamento 1:N da tabela Curso com Aluno.
        // 1 Curso pode possuir N Alunos.
        public List<Aluno> Alunos { get; set; } = new List<Aluno>();
    }

    // Banco de dados Escola
    public class DbEscola: DbContext
    {
        // Adição da tabela no banco de dados.
        // Esse atributo ficará responsável por Definir/Capturar valores da tabela Alunos
        public DbSet<Aluno> Alunos { get; set; }
        // Esse atributo ficará responsável por Definir/Capturar valores da tabela Cursos
        public DbSet<Curso> Cursos { get; set; }

        //public DbEscola(DbContextOptions<DbEscola> options): base(options) { }

        protected override void OnModelCreating(ModelBuilder Modelagem)
        {
            Modelagem.Entity<Aluno>(TabelaAluno =>
            {
                // Definindo a PK da Tabela Aluno.
                TabelaAluno.HasKey(Coluna => Coluna.Id);
                // Definindo o nome da Tabela no Database.
                TabelaAluno.ToTable("Alunos");
            });

            Modelagem.Entity<Curso>(TabelaCurso =>
            {
                // Definindo a PK da Tabela Curso.
                TabelaCurso.HasKey(Coluna => Coluna.Id);
                // Definindo o nome da Tabela no Database.
                TabelaCurso.ToTable("Cursos");
                // Definindo o relacionamento 1:N da Tabela Curso com Alunos.
                // 1 Curso pode possuir N Alunos.
                TabelaCurso.HasMany(Tabela => Tabela.Alunos);
            });
        }

        // Configurações de conexão com Banco de dados.
        protected override void OnConfiguring(DbContextOptionsBuilder Configuracao)
        {
            // Credêncial de Conexão com Banco de dados.
            string Credencial = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Escola;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

            // Definição da Conexão em um Banco de dados Sql Server.
            Configuracao.UseSqlServer(Credencial);
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            var Db = new DbEscola();

            var curso = new Curso
            {
                Nome = "Bootcamp C#",
                Alunos = new List<Aluno>
                {
                    new Aluno
                    {
                        Nome = "Willian",
                        Sobrenome = "Sant Anna"
                    }
                }
            };

            Db.Add(curso);
            Db.SaveChanges();
        }
    }
}
```

> Se tiver interesse, você poderá consultar os valores no Banco de dados:

```sql
select 
a.Nome as "Nome do Aluno", 
a.Sobrenome as "Sobrenome do Aluno",
c.Nome as "Nome do Curso"
from Alunos a
	left join Cursos c
		on a.CursosId = c.Id;
```