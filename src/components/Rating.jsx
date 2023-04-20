function Rating({ value, setValue, setRated}) {
  

  function handleSubmit() {
    if (!value) return;
      setRated(true)
  }

  return (
    <div className="feedback-window">
      <p className="icon-circle" data-spacing="large">
        <svg
          className="star-icon"
          width="17"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </p>

      <h2 className="title">How did we do?</h2>

      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="ratings">
        <button className="circle-btn" onClick={() => setValue("1")}>
          1
        </button>
        <button className="circle-btn" onClick={() => setValue("2")}>
          2
        </button>
        <button className="circle-btn" onClick={() => setValue("3")}>
          3
        </button>
        <button className="circle-btn" onClick={() => setValue("4")}>
          4
        </button>
        <button className="circle-btn" onClick={() => setValue("5")}>
          5
        </button>
      </div>

      <button className="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Rating;
