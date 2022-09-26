import type { MouseEventHandler } from "react";
import type { NextPage } from 'next'
import Link from 'next/link'

import styled from '@emotion/styled';

const LinkContainer = styled.a``;

const Home: NextPage = () => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    console.log(`Link has been clicked`);
  };
  const handleClickButton = (index: number): MouseEventHandler<HTMLButtonElement> =>  (e) => {
    switch (index) {
      case 0:
        console.log('DEBUG : 0');
        break;
      case 1:
        console.log('DEBUG : 1');
        e.stopPropagation();
        break;
      case 2:
        console.log('DEBUG : 2');
        e.preventDefault();
        break;
      case 3:
        console.log('DEBUG : 3');
        e.preventDefault();
        e.stopPropagation();
        break;
    }
    console.log(`DEBUG : Button Clicked`);
  };
  return (
    <main>
      <Link href="/about" passHref>
        <LinkContainer onClick={handleClick}>
          테스트
          <div>
            <button type="button" onClick={handleClickButton(0)}>
              버튼 0
            </button>
          </div>
          <div>
            <button type="button" onClick={handleClickButton(1)}>
              버튼 1 - Stop Propagation
            </button>
          </div>
          <div>
            <button type="button" onClick={handleClickButton(2)}>
              버튼 2 - Prevent Default
            </button>
          </div>
          <div>
            <button type="button" onClick={handleClickButton(3)}>
              버튼 3 - Prevent Default + Stop Propagation
            </button>
          </div>
        </LinkContainer>
      </Link>
    </main>
  )
}

export default Home
