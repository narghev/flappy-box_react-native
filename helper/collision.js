const collistionDetection = (box, obstacle) => {

  if (!obstacle) return false;

  if (box.right >= obstacle.left
    && box.right <= obstacle.right
    && box.bottom <= obstacle.height)
    return true;
  
  if (box.left >= obstacle.left
    && box.left <= obstacle.right
    && box.bottom <= obstacle.height)
    return true;

  return false;
}

export default collistionDetection;