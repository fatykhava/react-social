import React, {useState} from 'react';
import style from './Paginator.module.css';

let Paginator = ({currentPage, pageSize, totalItemsCount, portionSize, onBtnClick}) => {
  let [currentPortion, setCurrentPortion] = useState(1);
  const pageCount = Math.ceil(totalItemsCount / pageSize);
  const portionCount = Math.ceil(pageCount / portionSize);
  const leftPortionSide = (currentPortion - 1) * pageSize + 1;
  const rightPortionSize = currentPortion * pageSize;
  let pageButtons = [];

  for (let i = leftPortionSide; i <= rightPortionSize; i++) {
    pageButtons.push(<span key={`btn-${i}`}
                           className={`${i === currentPage ? style.active : ''} ${style.pageButtons}`}
                           onClick={(e) => {
                             onBtnClick(i)
                           }}>{i}</span>);
  }


  return (
    <div className={style.container}>
      {
        currentPortion !== 1 &&
        <button className={style.pageButtons} onClick={() => setCurrentPortion(--currentPortion)}>Prev
        </button>
      }
      {pageButtons}
      {
        currentPortion !== portionCount &&
        <button className={style.pageButtons} onClick={() => setCurrentPortion(++currentPortion)}>Next
        </button>
      }
    </div>
  );
}

export default Paginator;
