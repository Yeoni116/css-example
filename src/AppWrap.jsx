import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
            image="https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F60%2F201506011137165771.jpg"
            name="Joe Biden"
            size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return (
    <header style={{ backgroundColor: 'yellow' }}>
        {children}
    </header>
  );
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`'${name}'`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
