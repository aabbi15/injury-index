'use client'
import { Layout, Breadcrumb, Card, Button,Input } from 'antd';
import { useUser } from '@auth0/nextjs-auth0/client';

import { DatePicker, Space } from 'antd';


import { useState, useEffect } from 'react';


import InjuryInputCard from './injuryinputcard';



const { Content } = Layout;

export default function AddInjury() {



      
  const { user, error, isLoading } = useUser();
  

      // if(isLoading) return <div>Loading...</div>
      // console.log(user, error);

  const [injuries, setInjuries] = useState([]);


  const [color, setColor] = useState({
    "Front": { selected: false, number: 0 },
    "Back": { selected: false, number: 0 },
    "Trapezius": { selected: false, number: 0 },
    "Right_Lat": { selected: false, number: 0 },
    "Left_Lat": { selected: false, number: 0 },
    "Right_Tricep": { selected: false, number: 0 },
    "Left_Tricep": { selected: false, number: 0 },
    "Left_Glute": { selected: false, number: 0 },
    "Right_Glute": { selected: false, number: 0 },
    "Right_Hamstring": { selected: false, number: 0 },
    "Left_Hamstring": { selected: false, number: 0 },
    "Right_Calf": { selected: false, number: 0 },
    "Left_Calf": { selected: false, number: 0 },
    "Right_Ankle": { selected: false, number: 0 },
    "Left_Ankle": { selected: false, number: 0 },
    "Left_Rear_Deltoid": { selected: false, number: 0 },
    "Right_Rear_Deltoid": { selected: false, number: 0 },
    "Lower_Back": { selected: false, number: 0 },
    "Left_Elbow": { selected: false, number: 0 },
    "Right_Elbow": { selected: false, number: 0 },
    "Right_Hand_Fingers": { selected: false, number: 0 },
    "Left_Hand_Fingers": { selected: false, number: 0 },
    "Right_Deltoid": { selected: false, number: 0 },
    "Left_Deltoid": { selected: false, number: 0 },
    "Right_Bicep": { selected: false, number: 0 },
    "Left_Bicep": { selected: false, number: 0 },
    "Right_Pectoral": { selected: false, number: 0 },
    "Left_Pectoral": { selected: false, number: 0 },
    "Right_Oblique": { selected: false, number: 0 },
    "Left_Oblique": { selected: false, number: 0 },
    "Right_Quad": { selected: false, number: 0 },
    "Left_Quad": { selected: false, number: 0 },
    "Right_Knee": { selected: false, number: 0 },
    "Left_Knee": { selected: false, number: 0 },
    "Right_Shin": { selected: false, number: 0 },
    "Left_Shin": { selected: false, number: 0 },
    "Right_Wrist": { selected: false, number: 0 },
    "Left_Wrist": { selected: false, number: 0 },
    "Right_Forearm": { selected: false, number: 0 },
    "Left_Forearm": { selected: false, number: 0 },
    "Left_Hip": { selected: false, number: 0 },
    "Right_Hip": { selected: false, number: 0 },
    "Right_Adductor": { selected: false, number: 0 },
    "Left_Adductor": { selected: false, number: 0 },
    "Abs": { selected: false, number: 0 },
    "Right_Neck": { selected: false, number: 0 },
    "Left_Neck": { selected: false, number: 0 },
    "Right_Foot": { selected: false, number: 0 },
    "Left_Foot": { selected: false, number: 0 }
  }
  );

  const [injuryDetails, setInjuryDetails] = useState({});

  const handleInputChange = (str, value) => {
    setInjuryDetails(prevDetails => ({
        ...prevDetails,
        [str]: value
    }));
   

    // console.log(injuryDetails);
};

  const handleClick = (str) => {
    setColor(prevColor => {
      const newColor = {
        ...prevColor,
        [str]: {
          selected: !prevColor[str].selected,
          number: !prevColor[str].number
        }
      };

      // Update injuries state immediately after color state is updated
      const newInjuries = newColor[str].selected
        ? [...injuries, str]
        : injuries.filter(injury => injury !== str);

      setInjuries(newInjuries);

      RenderCards();

      return newColor;
    });
  };



  function onSubmit(e) {
    
    const { email } = user;

    console.log(email,injuryDetails);


  }

  const fillColor = (str) => {

    // console.log(str);
    if (color[str].selected) {
      return 'red'
    }
    else {
      return '#000000'
    }
  }

  const BodyMap = (props) => (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 612 722.6"
      style={{
        enableBackground: "new 0 0 612 722.6",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style type="text/css">
        {`
      .st0 { fill: #EEEEEE; stroke: #000000; stroke-linejoin: round; stroke-miterlimit: 1.4142; }
      .st1 { stroke: #000000; stroke-width: 1.0427; stroke-linejoin: round; stroke-miterlimit: 1.4142; }
      #Back-Muscles path:hover { fill: orange; }
      #Front-Muscles path:hover { fill: orange; } 
    `}
      </style>
      <path
        id="Front"
        className="st0"
        d="M153.2,410.3c-1,12.3,11.1,77.6,15.4,103.1c2,12.1,7.7,31.7,5.6,42.2c-2.9,14.6-3.7,33.4-2.1,44.4 c1,6.7,4.2,37.4-0.4,48.6c-2.4,5.9-6.7,36.1-6.7,36.1c-11.3,28.5-4.9,27-4.9,27c3.5,4.3,9.5,0.3,9.5,0.3c4.6,2.9,7.7-0.7,7.7-0.7 c3.9,3.2,8.5-0.4,8.5-0.4c4.9,2.5,9.5-2.1,9.5-2.1c2.8,1.4,3.5-0.4,3.5-0.4c8.5-0.5-4.7-27.6-4.7-27.6c-3.2-24.3,3.1-37.8,3.1-37.8 c20.6-61.1,21.6-77.3,13.4-100.3c-2.3-6.6-2.9-9.3-1.8-12.2c2.5-6.7,0.7-33.4,3.7-44.1c5.8-20.5,11.5-72.5,14.5-96.8 c4-32.7-14.2-76.5-14.2-76.5c-4-17.8,1.9-81.4,1.9-81.4c8.2,12.7,7.9,35.1,7.9,35.1c-1.3,23.5,19,59.5,19,59.5 c9.8,14.9,13.5,29,13.5,30c0,4.3-0.9,14.6-0.9,14.6l0.4,9c0.2,2.3,1.5,10.2,1.3,14c-1.5,23.5,2.2,19.1,2.2,19.1 c3.2,0,6.6-18.9,6.6-18.9c0,4.9-1.2,19.5,1.4,25c3.2,6.6,5.5-1.1,5.5-2.7c0.8-30,2.6-22.1,2.6-22.1c1.8,24.3,3.9,29.8,7.8,27.9 c2.9-1.4,0.3-29.2,0.3-29.2c5,16.5,8.8,19.1,8.8,19.1c8.3,5.8,3.2-10.2,2-13.4c-6.1-16.9-6.3-22.7-6.3-22.7 c7.6,15.2,13.4,14.6,13.4,14.6c7.5-2.4-6.5-23.9-14.7-34.1c-4.2-5.2-9.6-12.3-11.1-16.4c-2.5-7.1-4.5-29.8-4.5-29.8 c-0.8-26.8-7.4-38.4-7.4-38.4c-11.3-18.1-13.5-51.9-13.5-51.9l-0.5-57.1c-4-38.9-32.6-39.2-32.6-39.2c-29-4.3-33-13.7-33-13.7 c-6.1-8.8-2.6-25.8-2.6-25.8c5.1-4.1,7.1-15.1,7.1-15.1c8.5-6.5,8-16,4.1-15.9c-3.1,0.1-2.4-2.5-2.4-2.5C194,8.2,156.1,6,156.1,6 h-5.8c0,0-38,2.2-32.7,44.9c0,0,0.7,2.6-2.5,2.5c-3.9-0.1-4.3,9.4,4.2,15.9c0,0,2,11,7.1,15.1c0,0,3.5,16.9-2.6,25.8 c0,0-4,9.4-33,13.7c0,0-28.7,0.3-32.6,39.2l-0.5,57.1c0,0-2.1,33.8-13.5,51.9c0,0-6.6,11.6-7.4,38.4c0,0-1.9,22.7-4.5,29.8 c-1.5,4.1-6.9,11.2-11.1,16.4C12.9,366.9-1,388.4,6.4,390.8c0,0,5.8,0.6,13.4-14.6c0,0-0.2,5.8-6.3,22.7c-1.2,3.1-6.3,19.2,2,13.4 c0,0,3.8-2.6,8.8-19.1c0,0-2.7,27.8,0.3,29.2c3.9,1.9,6-3.6,7.8-27.9c0,0,1.8-7.9,2.6,22.1c0,1.5,2.3,9.3,5.5,2.7 c2.7-5.5,1.5-20.1,1.5-25c0,0,3.4,18.9,6.6,18.9c0,0,3.8,4.4,2.2-19.1c-0.3-3.8,1.1-11.7,1.3-14l0.4-9c0,0-0.9-10.3-0.9-14.6 c0-1.1,3.7-15.1,13.5-30c0,0,20.3-36,19-59.5c0,0-0.3-22.4,7.9-35.1c0,0,5.8,63.6,1.9,81.4c0,0-18.2,43.8-14.2,76.5 c3,24.3,8.7,76.3,14.5,96.8c3,10.6,1.2,37.4,3.7,44.1c1.1,2.9,0.5,5.6-1.8,12.2c-8.2,23-7.1,39.2,13.5,100.3c0,0,6.3,13.5,3.1,37.8 c0,0-13.2,27.1-4.7,27.6c0,0,0.7,1.8,3.5,0.4c0,0,4.6,4.7,9.5,2.1c0,0,4.6,3.6,8.4,0.4c0,0,3.1,3.6,7.7,0.7c0,0,6,4,9.5-0.3 c0,0,6.3,1.4-4.9-27c0,0-4.3-30.2-6.7-36.1c-4.5-11.2-1.3-42-0.4-48.6c1.6-11,0.7-29.8-2.1-44.4c-2.1-10.4,3.6-30.1,5.6-42.2 C142.2,487.9,153.2,410.3,153.2,410.3L153.2,410.3z"
      />
      <path
        id="Back"
        className="st0"
        d=" M 455.276 409.959 C 454.277 422.249 466.367 487.495 470.663 512.974 C 472.661 525.064 478.357 544.647 476.258 555.139 C 473.361 569.727 472.561 588.511 474.16 599.502 C 475.159 606.196 478.357 636.871 473.76 648.061 C 471.362 653.957 468 686 468 686 C 465.869 705.135 473.76 707.812 473.76 707.812 C 482.843 709.643 498 704 498 704 C 550.571 688.142 498 686 498 686 C 494.803 661.72 499.239 642.466 499.239 642.466 C 519.822 581.417 520.821 565.23 512.628 542.249 C 510.33 535.655 509.73 532.957 510.83 530.06 C 513.327 523.365 511.529 496.687 514.527 485.996 C 520.322 465.513 526.017 413.556 529.014 389.277 C 533.011 356.604 514.826 312.84 514.826 312.84 C 510.83 295.055 516.725 231.508 516.725 231.508 C 524.918 244.197 524.618 266.578 524.618 266.578 C 523.319 290.059 543.602 326.029 543.602 326.029 C 553.394 340.917 557.091 355.005 557.091 356.004 C 557.091 360.301 556.192 370.592 556.192 370.592 L 556.592 379.585 C 556.791 381.883 558.09 389.776 557.89 393.573 C 556.392 417.053 560.089 412.657 560.089 412.657 C 563.286 412.657 566.683 393.773 566.683 393.773 C 566.683 398.669 565.484 413.257 568.082 418.752 C 571.279 425.347 573.577 417.653 573.577 416.054 C 574.377 386.079 576.175 393.973 576.175 393.973 C 577.974 418.252 580.072 423.748 583.969 421.849 C 586.866 420.451 584.269 392.674 584.269 392.674 C 589.264 409.16 593.061 411.758 593.061 411.758 C 601.354 417.553 596.259 401.566 595.06 398.369 C 588.965 381.483 588.765 375.688 588.765 375.688 C 596.358 390.875 602.154 390.276 602.154 390.276 C 609.647 387.878 595.659 366.396 587.466 356.204 C 583.269 351.008 577.874 343.914 576.375 339.818 C 573.877 332.723 571.879 310.042 571.879 310.042 C 571.079 283.265 564.485 271.674 564.485 271.674 C 552.895 253.789 550.796 220.017 550.796 220.017 L 550.297 162.965 C 546.3 124.097 517.624 123.797 517.624 123.797 C 488.648 119.501 484.651 110.108 484.651 110.108 C 478.556 101.316 482.053 84.33 482.053 84.33 C 487.149 80.233 489.148 69.242 489.148 69.242 C 497.641 62.748 497.141 53.256 493.244 53.356 C 490.147 53.456 490.846 50.858 490.846 50.858 C 496.142 8.193 458.173 5.995 458.173 5.995 L 452.378 5.995 C 452.378 5.995 414.51 8.193 419.705 50.858 C 419.705 50.858 420.405 53.456 417.207 53.356 C 413.311 53.256 412.911 62.748 421.404 69.242 C 421.404 69.242 423.402 80.233 428.498 84.33 C 428.498 84.33 431.995 101.216 425.9 110.108 C 425.9 110.108 421.903 119.501 392.928 123.797 C 392.928 123.797 364.251 124.097 360.355 162.965 L 359.855 220.017 C 359.855 220.017 357.757 253.789 346.366 271.874 C 346.366 271.874 339.772 283.464 338.972 310.242 C 338.972 310.242 337.074 332.923 334.476 340.017 C 332.977 344.114 327.582 351.208 323.385 356.404 C 315.092 366.695 301.304 388.077 308.698 390.475 C 308.698 390.475 314.493 391.075 322.086 375.888 C 322.086 375.888 321.887 381.683 315.792 398.569 C 314.593 401.666 309.497 417.753 317.79 411.958 C 317.79 411.958 321.587 409.36 326.583 392.874 C 326.583 392.874 323.885 420.65 326.882 422.049 C 330.779 423.948 332.877 418.452 334.676 394.172 C 334.676 394.172 336.474 386.279 337.274 416.254 C 337.274 417.753 339.572 425.546 342.769 418.952 C 345.467 413.456 344.268 398.869 344.268 393.973 C 344.268 393.973 347.665 412.857 350.863 412.857 C 350.863 412.857 354.659 417.253 353.061 393.773 C 352.761 389.976 354.16 382.082 354.36 379.784 L 354.759 370.792 C 354.759 370.792 353.86 360.5 353.86 356.204 C 353.86 355.105 357.557 341.117 367.349 326.229 C 367.349 326.229 387.632 290.259 386.333 266.778 C 386.333 266.778 386.033 244.397 394.226 231.707 C 394.226 231.707 400.022 295.255 396.125 313.04 C 396.125 313.04 377.94 356.803 381.937 389.476 C 384.934 413.756 390.629 465.713 396.425 486.196 C 399.422 496.787 397.624 523.565 400.122 530.259 C 401.221 533.157 400.621 535.855 398.323 542.449 C 390.13 565.43 391.229 581.617 411.812 642.666 C 411.812 642.666 416.197 661.72 413 686 C 413 686 367.995 686.979 414 704 C 414 704 425.24 709.513 437.191 708.411 C 437.191 708.411 449.062 708.885 443.885 684.331 C 443.885 684.331 439.589 654.156 437.191 648.261 C 432.694 637.071 435.892 606.296 436.791 599.702 C 438.39 588.711 437.491 569.926 434.693 555.338 C 432.595 544.947 438.29 525.264 440.288 513.174 C 444.285 487.495 455.276 409.959 455.276 409.959 L 455.276 409.959 Z "
      />
      <g id="Back-Muscles">
        <g>
          <path
            id="Trapezius"
            d="M450.5,265.3c0.3,1.3,2.6-10.3,5.4-9c2.9,1.3,6.4,9,6.4,8.7c-0.9-9.5,7.6-24.2,13.8-34.3 c6.7-10.9,10.2-11.5,14.7-25.6c1.8-5.6,0-42.3,7.7-55.8c7.7-13.5,13.1-12.1,18.9-15.4c1.3-0.7-47.2-4.6-51.4-37.3 c-0.7-5.4-0.7-10.3,0.1-15.3c0.9-4.9-25.2-6.9-26.6-0.3c-2.1,10.1,15.9,39-45.5,48.4c-4.3,0.7,12.7,7.2,22.1,21.5 c2.3,3.5,2.2,11.7,9.3,58C427,219.3,447.4,249.9,450.5,265.3L450.5,265.3z"
            fill={fillColor("Trapezius")}
            onClick={() => handleClick("Trapezius")}
          />
          <path
            id="Right_Lat"
            d=" M 466.966 262.182 C 466.966 262.182 484.551 280.067 486.45 290.758 C 488.348 301.449 488.348 317.736 497.541 316.237 C 497.641 316.237 494.443 312.241 498.64 304.947 C 513.228 279.867 512.628 250.692 512.628 250.692 L 513.927 204.93 C 513.927 204.93 505.334 207.827 494.543 200.733 C 492.345 199.334 493.644 217.319 483.252 226.712 C 478.856 230.508 462.77 251.491 466.966 262.182 L 466.966 262.182 Z "
            fill={fillColor("Right_Lat")}
            onClick={() => handleClick("Right_Lat")}
          />
          <path
            id="Left_Lat"
            d=" M 444.185 262.182 C 444.185 262.182 426.6 280.067 424.701 290.758 C 422.803 301.449 425.201 316.499 416.008 315 C 415.908 315 416.708 312.241 412.511 304.947 C 397.923 279.867 397.224 250.692 397.224 250.692 L 397.224 207 C 397.224 207 405.817 207.827 416.608 200.733 C 418.806 199.334 417.507 217.319 427.898 226.712 C 432.295 230.508 448.381 251.491 444.185 262.182 L 444.185 262.182 Z "
            fill={fillColor("Left_Lat")}
            onClick={() => handleClick("Left_Lat")}
          />
          <path
            id="Right_Tricep"
            d=" M 516.825 170.958 C 516.825 170.958 529.714 163.364 534.31 165.562 C 538.906 167.761 547.299 181.749 548.298 187.544 C 546.994 202.329 551 239.101 551 239.101 C 551 239.101 551.895 244.896 547.299 246.295 C 542.803 247.694 543.403 234.405 540.005 232.906 C 536.608 231.408 539.805 243.198 536.408 244.197 C 533.011 245.096 522.92 241 522.92 241 L 515.326 222.015 C 515.226 222.015 522.42 181.149 516.825 170.958 L 516.825 170.958 Z "
            fill={fillColor("Right_Tricep")}
            onClick={() => handleClick("Right_Tricep")}
          />
          <path
            id="Left_Tricep"
            d=" M 393.727 170.059 C 393.727 170.059 380.838 162.365 376.241 164.563 C 371.645 166.761 363.252 180.95 362.253 186.845 C 362.702 204.289 360 238 360 238 C 360 238 358.656 244.896 363.252 246.295 C 367.748 247.694 367.149 234.205 370.546 232.707 C 373.943 231.208 370.746 243.198 374.143 244.097 C 377.54 244.996 387.632 240.9 387.632 240.9 L 395.226 221.716 C 395.326 221.716 388.132 180.35 393.727 170.059 Z "
            fill={fillColor("Left_Tricep")}
            onClick={() => handleClick("Left_Tricep")}
          />
          <path
            id="Left_Glute"
            d="M404.4,312.3c2.8-0.5,47.1,21.6,49.5,55.8c2.4,34.1-24.1,46.4-46.5,40.4c-22.4-6-20.7-32.7-20.1-39.1 c0.4-4.6,4.4-14.9,8-39.8C396,325.2,401.6,312.8,404.4,312.3L404.4,312.3z"
            fill={fillColor("Left_Glute")}
            onClick={() => handleClick("Left_Glute")}
          />
          <path
            id="Right_Glute"
            d="M512.8,316.5c-2.5-1-47.2,12.3-55.6,45.3c-8.3,33,13.9,50.1,35.6,48.5c21.7-1.6,24.9-28.1,25.5-34.5 c0.4-4.6-1.4-15.4-0.3-40.6C518.2,330.8,515.3,317.5,512.8,316.5L512.8,316.5z"
            fill={fillColor("Right_Glute")}
            onClick={() => handleClick("Right_Glute")}
          />
          <path
            id="Right_Hamstring"
            d=" M 465.967 411.958 C 465.967 411.958 508.831 413.656 515.626 407.661 C 522.42 401.666 521.221 441.335 512.628 483 C 506.68 524.076 510.199 525.099 509 524 C 499.352 516.801 495.942 498.386 495.342 498.885 C 494.843 499.285 475.559 527.761 478.656 549.943 C 478.856 551.242 462.698 449.227 460 436.837 C 457.202 424.647 455.436 412.108 465.967 411.958 L 465.967 411.958 Z "
            fill={fillColor("Right_Hamstring")}
            onClick={() => handleClick("Right_Hamstring")}
          />

          <path
            id="Left_Hamstring"
            d=" M 444.685 411.958 C 444.685 411.958 402.02 413.656 395.226 407.661 C 388.431 401.666 388.631 440.334 397.224 481.999 C 402.501 521.507 399.801 526.099 401 525 C 409.559 518.762 414.809 498.386 415.409 498.885 C 415.908 499.285 435.093 527.761 431.995 549.943 C 431.795 551.242 447.682 443.39 450.38 431 C 453.078 418.81 453.277 412.357 444.685 411.958 Z "
            fill={fillColor("Left_Hamstring")}
            onClick={() => handleClick("Left_Hamstring")}
          />
          <path
            id="Right_Calf"
            d=" M 496.741 528.96 C 496.741 528.96 477.257 553.64 475.959 563.732 C 472.885 582.676 477.198 619.534 477.957 630.976 C 480.655 637.17 493.944 617.187 497.241 604.697 C 500.538 592.208 493.707 616.288 502 625.28 C 503.399 626.779 518.762 576.402 515.326 559 C 511.534 541.504 510.135 541.504 509 534 C 508.567 517.978 501.837 528.96 500.238 536.354 C 498.64 543.748 496.741 528.96 496.741 528.96 L 496.741 528.96 Z "
            fill={fillColor("Right_Calf")}
            onClick={() => handleClick("Right_Calf")}
          />
          <path
            id="Left_Calf"
            d=" M 414.51 528.96 C 414.51 528.96 433.701 554.908 435 565 C 436.511 589.826 432.89 616.005 431.995 630.976 C 429.297 637.17 417.307 617.187 414.01 604.697 C 410.713 592.208 417.293 616.288 409 625.28 C 407.601 626.779 392.857 581.191 395.226 563.732 C 396.815 544.641 403.499 541.491 402 531 C 403.089 522.291 409.414 528.96 411.013 536.354 C 412.611 543.748 414.51 528.96 414.51 528.96 L 414.51 528.96 Z "
            fill={fillColor("Left_Calf")}
            onClick={() => handleClick("Left_Calf")}
          />
        </g>
        <path
          id="Right_Ankle"
          d=" M 472 678.636 C 472 678.636 470.007 658.453 478 639.469 C 478 639.469 489.248 650.36 484.951 676.738 C 484.951 676.738 487.31 647.362 499 634.073 C 499 634.073 493.444 655.955 496.042 679.535 C 496.042 679.535 483.391 689.427 472 678.636 Z "
          fill={fillColor("Right_Ankle")}
          onClick={() => handleClick("Right_Ankle")}
        />
        <path
          id="Left_Ankle"
          d=" M 441 676.937 C 441 676.937 439.893 656.984 432 638 C 432 638 423.902 648.661 428.198 675.039 C 428.198 675.039 422.69 647.362 411 634.073 C 411 634.073 417.598 655.056 415 678.636 C 415 678.736 429.609 687.828 441 676.937 Z "
          fill={fillColor("Left_Ankle")}
          onClick={() => handleClick("Left_Ankle")}
        />
        <path
          id="Left_Rear_Deltoid"
          d="M387,131.8c0,0-13,0-21.9,28.3c0,0,17-3.2,27.3,6.1c0,0,11.5-10.1,9.1-17.2C401.5,149,404.5,140.7,387,131.8z"
          fill={fillColor("Left_Rear_Deltoid")}
          onClick={() => handleClick("Left_Rear_Deltoid")}
        />
        <path
          id="Right_Rear_Deltoid"
          d="M524.6,132.8c0,0,13,0,21.9,28.3c0,0-17-3.2-27.3,6.1c0,0-11.5-10.1-9.1-17.2C510.1,150,507.1,141.7,524.6,132.8z"
          fill={fillColor("Right_Rear_Deltoid")}
          onClick={() => handleClick("Right_Rear_Deltoid")}
        />
        <path
          id="Lower_Back"
          d="M427.5,317.3c0,0-3.7-39.5,27-47.4c0,0,30-3.4,29.4,47.4c0,0-10.7,5.4-28.2,27.8 C455.6,345.1,445.2,328.9,427.5,317.3z"
          fill={fillColor("Lower_Back")}
          onClick={() => handleClick("Lower_Back")}
        />
        <path
          id="Left_Elbow"
          d="M356.5,254.5c0,0,13.4-18,26,0c0,0,3.1,11-16.6,21.4C365.9,275.9,354.2,276.1,356.5,254.5z"
          fill={fillColor("Left_Elbow")}
          onClick={() => handleClick("Left_Elbow")}
        />
        <path
          id="Right_Elbow"
          d="M554.3,253.5c0,0-13.4-18-26,0c0,0-3.1,11,16.6,21.4C544.9,274.9,556.6,275.1,554.3,253.5z"
          fill={fillColor("Right_Elbow")}
          onClick={() => handleClick("Right_Elbow")}
        />
        <path
          id="Right_Hand_Fingers"
          d=" M 587.128 362 C 587.128 362 567.814 332.934 559.851 364.618 C 559.851 364.618 553.322 388.162 576.437 386 C 576.437 386 594.841 376.02 587.128 362 Z "
          fill={fillColor("Right_Hand_Fingers")}
          onClick={() => handleClick("Right_Hand_Fingers")}
        />
        <path
          id="Left_Hand_Fingers"

          d=" M 324 362 C 324 362 343.314 332.934 351.278 364.618 C 351.278 364.618 357.807 388.162 334.691 386 C 334.691 386 316.288 376.02 324 362 Z "
          fill={fillColor("Left_Hand_Fingers")}
          onClick={() => handleClick("Left_Hand_Fingers")}
        />
      </g>
      <g id="Front-Muscles">
        <path
          id="Right_Deltoid"
          d=" M 124.251 131.99 C 124.251 131.99 79.794 110.771 64.401 146 C 57.906 159.489 61.803 200.134 62.003 202.132 C 62.102 203.431 74.792 174.755 85.683 168.66 C 87.581 167.661 85.183 139.784 124.251 131.99 Z "
          fill={fillColor("Right_Deltoid")}
          onClick={() => handleClick("Right_Deltoid")}
        />
        <path
          id="Left_Deltoid"
          d=" M 182.502 131.99 C 182.502 131.99 225.315 109.33 243 146 C 249.495 159.489 244.951 200.134 244.751 202.132 C 244.651 203.431 231.961 174.755 221.07 168.66 C 219.172 167.661 221.57 139.784 182.502 131.99 L 182.502 131.99 Z "
          fill={fillColor("Left_Deltoid")}
          onClick={() => handleClick("Left_Deltoid")}
        />
        <path
          id="Right_Bicep"
          d="M87.7,169.6c0,0,3.8,58.4-0.6,61c-5.1,3-7.8,31.8-7.8,31.8s-2.6-7.3-5.5-7c-2.9,0.3-8.4,5.8-9.6,7.8 C63.1,265.1,46.1,203,87.7,169.6L87.7,169.6z"
          fill={fillColor("Right_Bicep")}
          onClick={() => handleClick("Right_Bicep")}
        />
        <path
          id="Left_Bicep"
          d="M220.9,177.2c0,0-3.8,58.4,0.7,61c5.1,3,7.8,31.8,7.8,31.8s2.6-7.3,5.5-7c2.9,0.3,8.4,5.8,9.6,7.8 C245.6,272.7,262.6,210.6,220.9,177.2L220.9,177.2z"
          fill={fillColor("Left_Bicep")}
          onClick={() => handleClick("Left_Bicep")}
        />
        <path
          id="Right_Pectoral"
          d="M146.2,139c-1.1,13.9,7,31.1,7.1,41.5c0.1,14-1.1,25.4-26,28.2c-19.9,2.2-24.4-6-30.9-10.2 c-4-2.6-5.3-29.1-8.9-33.1c-2.5-2.7,13.9-31,36.6-30.8C146.9,134.8,146.5,136,146.2,139L146.2,139z"
          fill={fillColor("Right_Pectoral")}
          onClick={() => handleClick("Right_Pectoral")}
        />
        <path
          id="Left_Pectoral"
          d="M160.4,139c1.1,13.9-7,31.1-7.1,41.5c-0.1,14,1.1,25.4,26,28.2c19.9,2.2,24.4-6,30.9-10.2 c4-2.6,5.3-29.1,9-33.1c2.5-2.7-13.9-31-36.6-30.8C159.8,134.8,160.2,136,160.4,139L160.4,139z"
          fill={fillColor("Left_Pectoral")}
          onClick={() => handleClick("Left_Pectoral")}
        />
        <path
          id="Right_Oblique"
          d="M125.2,218c0,0,4.9,110.6,0,114.6c-4.8,4-5.8-22.1-23.6-25c-3.3-0.6-0.6-59.9-8.5-74.1 C85.1,219.3,121.8,213.4,125.2,218L125.2,218z"
          fill={fillColor("Right_Oblique")}
          onClick={() => handleClick("Right_Oblique")}
        />
        <path
          id="Left_Oblique"
          d="M180.5,218c0,0-4.9,110.6,0,114.6c4.8,4,5.8-22.1,23.6-25c3.3-0.6,0.6-59.9,8.5-74.1 C220.6,219.3,183.9,213.4,180.5,218L180.5,218z"
          fill={fillColor("Left_Oblique")}
          onClick={() => handleClick("Left_Oblique")}
        />
        <path
          id="Right_Quad"
          d=" M 109.863 332.624 C 109.863 332.624 146.932 414.755 144.134 453.223 C 141.337 491.691 137 504.208 137 514 C 137 523.792 139.838 500.184 127.548 500.084 C 113.16 499.985 102.469 511.675 98.572 524.464 C 97.973 526.263 96.574 487.994 96.574 487.994 C 96.574 487.994 92.397 477.403 89 442.033 C 83.904 388.277 122.552 368.993 109.863 332.624 Z "
          fill={fillColor("Right_Quad")}
          onClick={() => handleClick("Right_Quad")}
        />
        <path
          id="Left_Quad"
          d=" M 195.991 332.624 C 195.991 332.624 157.523 414.755 160.321 453.223 C 164.294 482.688 170 504.208 170 514 C 170 523.792 168.814 500.184 181.104 500.084 C 195.492 499.985 203.385 511.675 207.282 524.464 C 207.881 526.263 210.279 487.994 210.279 487.994 C 210.279 487.994 214.603 475.371 218 440 C 222.996 386.245 183.202 368.993 195.991 332.624 Z "
          fill={fillColor("Left_Quad")}
          onClick={() => handleClick("Left_Quad")}
        />
        <path
          id="Right_Knee"
          d="M129.8,535.8c0,0,0,12.4-5.5,18.3c-5.5,5.9-21.3,4.6-23.4-18.3c-2.1-22.8,15.8-32,28.9-13 C129.8,522.8,131.1,525.8,129.8,535.8z"
          fill={fillColor("Right_Knee")}
          onClick={() => handleClick("Right_Knee")}
        />
        <path
          id="Left_Knee"
          d="M175.5,535.8c0,0,0,12.4,5.5,18.3c5.5,5.9,21.3,4.6,23.4-18.3c2.1-22.8-15.8-32-28.9-13 C175.5,522.8,174.1,525.8,175.5,535.8z"
          fill={fillColor("Left_Knee")}
          onClick={() => handleClick("Left_Knee")}
        />
        <path
          id="Right_Shin"
          d="M98.7,568.1c0,0,16.1-15,29.6,3.3c0,0-8.7,69.6-3.1,88C125.3,659.3,105,612,98.7,568.1z"
          fill={fillColor("Right_Shin")}
          onClick={() => handleClick("Right_Shin")}
        />
        <path
          id="Left_Shin"
          d="M208.5,568.1c0,0-16.1-15-29.6,3.3c0,0,8.7,69.6,3.1,88C182,659.3,202.3,612,208.5,568.1z"
          fill={fillColor("Left_Shin")}
          onClick={() => handleClick("Left_Shin")}
        />
        <path
          id="Right_Wrist"
          d=" M 28 351.408 C 28 351.408 33.414 360.8 50 356.404 L 51.411 350.709 C 51.411 350.709 42.119 348.61 43.018 336.72 C 43.018 336.72 38.595 347.911 32 345.113 L 28 351.408 Z "
          fill={fillColor("Right_Wrist")}
          onClick={() => handleClick("Right_Wrist")}
        />
        <path
          id="Left_Wrist"
          d=" M 281 355.604 C 281 355.604 274.985 367.195 257 362.399 L 257 356.404 C 257 356.404 266.433 353.306 265.533 340.217 C 265.533 340.217 271.928 353.806 279.122 350.709 L 281 355.604 Z "
          fill={fillColor("Left_Wrist")}
          onClick={() => handleClick("Left_Wrist")}
        />
        <path
          id="Right_Forearm"
          d="M53.1,265.4c0,0,19.2,4.9,23.4,17.8c0,0-6.9,24.9-25.3,53.8c0,0-3,1.4-11.6-4C39.5,332.9,45,279.7,53.1,265.4z"
          fill={fillColor("Right_Forearm")}
          onClick={() => handleClick("Right_Forearm")}
        />
        <path
          id="Left_Forearm"
          d="M253.7,269.8c0,0-19.2,4.9-23.4,17.8c0,0,6.9,24.9,25.3,53.8c0,0,3,1.4,11.6-4C267.3,337.3,261.8,284,253.7,269.8z"
          fill={fillColor("Left_Forearm")}
          onClick={() => handleClick("Left_Forearm")}
        />
        <path
          id="Left_Hip"
          d="M208,316.3l-13.5,12.8c0,0,33.5,45.8,31.2,57.8C225.7,386.9,230,341.7,208,316.3z"
          fill={fillColor("Left_Hip")}
          onClick={() => handleClick("Left_Hip")}
        />
        <path
          id="Right_Hip"
          d=" M 95.974 318.236 L 109.163 331.025 C 109.163 331.025 81.755 373.681 83 388.677 C 83 388.777 74.697 361.526 95.974 318.236 Z "
          fill={fillColor("Right_Hip")}
          onClick={() => handleClick("Right_Hip")}
        />
        <path
          id="Right_Adductor"
          d=" M 118.955 336.42 C 118.955 336.42 146.932 421.919 146.332 445 L 150 415.555 L 152.827 380.584 C 152.827 380.584 142.036 344.714 121.553 332.124 C 121.653 332.124 118.256 331.524 118.955 336.42 Z "
          fill={fillColor("Right_Adductor")}
          onClick={() => handleClick("Right_Adductor")}
        />
        <path
          id="Left_Adductor"
          d=" M 187.698 337.02 C 187.698 337.02 158.7 421.819 159 445 L 155 415.555 L 153.926 380 C 153.926 380 164.517 345.113 185.1 332.723 C 185.1 332.723 188.497 332.124 187.698 337.02 Z "
          fill={fillColor("Left_Adductor")}
          onClick={() => handleClick("Left_Adductor")}
        />
        <path
          id="Abs"
          d="M127.4,216.3c0,0,25.6-30.6,51,0c0,0,1.7,96.5-5,121c0,0-20.5,17.3-41.4,0C131.9,337.4,125.9,291,127.4,216.3z"
          fill={fillColor("Abs")}
          onClick={() => handleClick("Abs")}
        />
        <path
          id="Right_Neck"
          d=" M 143 120 C 138.107 128.251 117.495 126.197 111 122 C 133.757 125.303 133.597 88.127 130 84.13 C 132.723 82.331 147.199 105.155 143 120 Z "
          fill={fillColor("Right_Neck")}
          onClick={() => handleClick("Right_Neck")}
        />
        <path
          id="Left_Neck"
          d=" M 163.357 120 C 170.432 126.937 187.698 126.197 194.193 122 C 171.436 125.303 171.596 88.127 175.193 84.13 C 172.469 82.331 159.157 105.155 163.357 120 Z "
          fill={fillColor("Left_Neck")}
          onClick={() => handleClick("Left_Neck")}
        />
        <path
          id="Right_Foot"
          d=" M 118.955 666 C 118.955 666 124.634 654.146 135 664.683 C 135 664.683 136.724 693.905 144 705 C 144 705 118.392 708.958 109.863 703 C 109.822 703.034 118.343 691.724 118.955 666 Z "
          fill={fillColor("Right_Foot")}
          onClick={() => handleClick("Right_Foot")}
        />
        <path
          id="Left_Foot"
          d=" M 188.08 666 C 188.08 666 182.401 654.146 172.035 664.683 C 172.035 664.683 170.311 693.905 163.035 705 C 163.035 705 188.642 708.958 197.172 703 C 197.213 703.034 188.692 691.724 188.08 666 Z "
          fill={fillColor("Left_Foot")}
          onClick={() => handleClick("Left_Foot")}
        />
      </g>
    </svg>
  );

  const onOk = (value) => {
    // console.log('onOk: ', value);
  };

  const changeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };



  function RenderCards() {
    return injuries.map((key) => (
        <InjuryInputCard key={key} str={key} handleInputChange={handleInputChange} />
    ));
}

  // function RenderCards() {


  //   let allcards = [];
  //   console.log("render", injuries);
  //   injuries.map((key) => {


  //     allcards.push(<InjuryInputCard str={key} />);


  //   });

  //   console.log(allcards);
  //   return allcards;
  // }

  return (
    <div>
      <Content
        style={{
          margin: '0 16px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Add Injury</Breadcrumb.Item>
          <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 550,
            background: "#ffffff",
            borderRadius: 8,
          }}


        >

          <div className=' mt-10  grid grid-cols-5 gap-10'>


            <div className='  col-span-3 '>

              <div className='max-h-[800px] border border-gray-500'>
                <BodyMap />
              </div>

              <div className='flex mt-2 justify-end' >
                <Button type="primary" onClick={onSubmit}>Submit Injury Report</Button>
              </div>


            </div>

            <div className='col-span-2 w-full '>
              

            <div className='w-full flex-row gap-2 mb-3 '>
                <div className='w-full text-md'>Enter name of the Reporter</div>
                <Input placeholder="Alex Williams" className='w-[250px]' size='large' />;
              </div>

              <div className='w-full flex-row gap-2 mb-3 '>
                <div className='w-full text-md'>Enter email of the Reporter</div>
                <Input placeholder="alex@gmail.com" className='w-[250px]' size='large' />;
              </div>


              <div className='w-full flex-row mb-6 pb-3 border-b-2'>

                <div className='w-full text-md'>Choose Date and Time of the Injury</div>
                <DatePicker
                showTime
                size='large'
                className='w-[250px]'
                onChange={(value, dateString) => {
                 changeDate(value, dateString);
                }}
                onOk={onOk}
              />

              </div>

              <div>

                <div className=' text-lg font-bold'> List of injuries </div>
              {
                RenderCards()
              }
              </div>
              
              
            </div>
          </div>


        </div>
      </Content>

    </div>
  )
}