import React from 'react';
// Components
import * as C from '../../../layout/containers';
import * as T from '../../../layout/typography';
import FaqCard from './components/FaqCard';

const elements = Array.from({ length: 12 }, (_, i) => i + 1);

const Faq = () => {
  return (
    <C.FullScreen>
      <T.Heading variant="black">Perguntas Frequentes</T.Heading>
      <C.ListWrapper
        data={elements}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FaqCard />}
        keyExtractor={(item, index) => String(index)}
      />
    </C.FullScreen>
  );
};

export default Faq;
