import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Siderbar';
import { PostType } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucasFDias.png',
      name: 'John Typescript',
      role: 'CTO LL'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. Esse projeto simula um pouco do twitter 🚀'},
      { type: 'link', content: '👉 github.com/LucasFDias' },
    ],
    publishedAt: new Date('2023-09-15 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LucasFDias.png',
      name: 'John React',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal! 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. Esse projeto simula um pouco do twitter 🚀'},
      { type: 'link', content: '👉 github.com/LucasFDias' },
    ],
    publishedAt: new Date('2023-09-20 20:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
 


