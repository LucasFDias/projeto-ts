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
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare' },
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
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare' },
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
 


