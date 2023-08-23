import { createContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ReactNode } from 'react';
export const ContextData = createContext<undefined | dataType[]>([]);

type Props = { children: ReactNode };

export default function ContextValue({ children }: Props): React.JSX.Element {
  const [news, setNews] = useState<dataType[]>([]);

  async function getDatas() {
    try {
      const res = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=${process.env.EXPO_PUBLIC_API_KEY}`
      );

      if (res) {
        const { data } = res.data;
        setNews(data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getDatas();
  }, []);

  return <ContextData.Provider value={news}>{children}</ContextData.Provider>;
}
