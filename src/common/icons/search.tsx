import { Icon, type IconProps } from '@chakra-ui/react';
import type { FC } from 'react';

const Search: FC<IconProps> = (props) => (
  <Icon {...props} h="1.5625rem" w="1.6875rem">
    <svg
      width="25"
      height="25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M0 0h25v25H0V0Z" fill="url(#a)" />
      <defs>
        <pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#b" transform="scale(.00667)" />
        </pattern>
        <image
          id="b"
          width="150"
          height="150"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAP///////////////////////////////////////////////////////////////7eV4oIAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAAE1UlEQVR4Xu2c6babMAyEY/Y19P2ftpColmzMZg2Q08P3k9w4gzyW5aV9PTw8PDw8PPyHJHlelGVVlUWe0aN7MVnV9cMfh7YpE/r4FkzZeYosQ1PQH12Myfwo+dTXd6ipNzR96K8N2T5RE+/rhO0XNTFcJCx70w/upb9gXJqWfuwIFX35NNJwqIZ337dd1y8FsqOvn0QWcFVXZamhz6eEX4bieWpHlr6qoatS+kySN/Q5M4T+DoLxf6wrOEo+eUV/ZCnpEzC+2buNJD57i1OMn7h27ne8fOoJO8H4pqO2PwzlcvdJ0p6+8AXfj86Ld/tETZT0lS85PUXhtF7vVzXmFPrSB/B4LERmODrJOR05HHmjLVKp6nBHOLYE2t6I941K19KYLT3TIxLWEDeJyJSHsn1O7Y0c70FCxBtkL9mF0YnHCHc29EyHmNxqehRBSk1MILJEwu/ZaMIvrNDTIw0cLKUphO314RKmUFYAhpoZ0ScJDtZbO4KESbW1qgiWemFluDTSDkY2KmDWKKgpfe5inyI2FDhcutBzH0KmMg6XLvZcZkFmMjEYVabnPsSs87iUUNXP1gygcoR7UdMgT2SgxRT34kBPYmBrYfrw9eJCVdGitRZicv3AL6owl7WWoqJx4V5U2MJmLdz6DpAIE2oBZy1RPcf7glee9ABATS0qhqLNMm96AICrG3pwHCsLNhDlUIwuImwTwKUw5/lov54hiwu46ILe2hM0I05wtKJlWXv+aCf+luXPSBAsix4cx9pTU4V42EIw/lU5y2uXiAygKOHpHneOaosSxTCy0z1s55rfVLGCtdM9LHFxNlXUW4Dp3gOyHObchzrZtdbSvCjECRLuQ5UtIC8n4GpLtcKz5gKlCPuauvY46JC1Dy+HddHnHZvIcwIX3oJQZhzuRYDpxWGZ0hNiO10fLl7pqyslNqk607NR9WmQM6p2N10c0gCOfThcyshzAYjYlhLhUoVeHNIgRrXYTdeMH3nOBsmBwqnxJ+Dybof6OOSLbJEeHYbzH2xXiveToktdYXdcSSnOkOJ8Ie9XAa8ciG6MiZdzvwp5oUUMo8NXDoz0Fa4LJ+QJ+MHx6N+vwhRuhHNT5khenV8mhOoS2Wuk3tmRRl7O+QdUl3NTaueIzKQnGaguzyPbF5MWRI1Adcn0NbF+kTrzXsPhRN9PtGFlJqsWI/WlLMsqQyXW0B3d1r95arIm4PMgLShqsjwRtE1VFsX07zHqLqB8xLnwKECdcTkpey/j8Jgb4EsP6snZBeJt2umnl3SBqq9ZBtviTfXV6brSJacEGPg26Om6XtnOiLm3ec/XNbuvHKLzrxhfoGs0/2pfDm2g/pHFswSqaywQwplzut0f/KElWWBdI0lRNTZsw7sfU2tY0sSiLLyuLyZJ02SzaX+2F5ykaxduMelyoy7eug5wo67VtHKfLnlZd859utZq1jt1rZett+laqCT/8ejyeHQdY0sX/dnlbOgC3lI5xoYu1Va7hnVdwPsgB1nXhTgmjGNVF+hWcAxruqBbrAdZ0XXbWJxY1nWrrGVdoHsXsSzputHyHxZ0KU969QR13WutDyFd0C3fSOa6UFuXOnxdqI1LLe4/cf/saf4Gpd2g3vOfAVxIXnfvvq+Xd3seHh4eHh4efpPX6y+GAt6N34BeSAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  </Icon>
);

export default Search;
