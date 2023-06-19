export const Cell = ({children, updateBoard, rowIndex, colIndex}) => {

    const className = "cell"
  
    const handleClick = () => {
      updateBoard(rowIndex, colIndex)
    }
  
    return (
      <td className={className} onClick={handleClick}>
        {children}
      </td>
    )
  }
  