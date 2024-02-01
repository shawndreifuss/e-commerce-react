import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import NotificationsIcon from "@mui/icons-material/Notifications";

const menuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

const Notification = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
            <NotificationsIcon
              color="action"
              className="mr-2 mt-1 h-6 w-6 cursor-pointer tracking-normal"
            />
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="gray"
            shadow={false}
            className="bg-[url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUZGRgYHBocHBwaGhgaHRgeGhoaGhwaGhocIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjEkJCQxNDExNDQ0PTQ0NDQ0PzQ0NDQ0NDU0MT80PzQ4NDQ0NDQ1MTQ0NDQxNDQ0NDQ0PzQ0Mf/AABEIASgAqgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEHAAj/xABDEAACAQIEAwUGAgcIAgEFAAABAhEAAwQSITEFQWEGIlFxgRMykaGxwULRBxQjUmJy8CQzgpKissLh0vFzFRY0Q1P/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgIDAAMBAQEAAAAAAAABAhEhMQMSQSJRYUJxMv/aAAwDAQACEQMRAD8AbI8PEt51o8IgLJQjIMsRzo3AAhlnas5ezpqtts5KxoOdRdXOUsBvV+HuDM8mqnvgqsHn96Ph/U7qEsIUGpM52yDSorehxJ5V3EX4J15U9wFVo53YRAHKkuI4kbV1lGUjwJinvCnJZ5586yHG4/WX0/CPqayv7VOWx4DiPaKXjQzWbx4AuuTsCab9i7iixBgATPKNaoxuBR3Ym5GbUALMjoZielOY7kK3VZjE4605AtzmB135HXepDx6UcnZlFJKXjJOzrAnwJXb4UJicO6vkIgjf/rpSyxsrXx2aU2LWchiNBtRGJfLkAG5q8rlQgchQzPISfGoaKwAbjaagUEq92550eg/aP5UAo7lyf3jQei/Bjvt0X86W8EdjeYEaSaNR3DNk1JFEYex7LKX0nnWmPDHLlHGQGMiKVYtA6k6qq79au4pdVgzEmBtQtwFsMTOlWjew1u4LiMQIgRpSE2KecISLbUvy04JHtr8YtTkJ7xpth3BK61kLOAtM+cnWa1fDspZRURNC8VwDs+ZLjLPIGgLNu+hCm5I60243jBbYALJNLsLivasVKwayu9rmhl6zeOocbUtv2cUT74o67xFbIIeZ5VQnaC2RqD8DRfb4ODHs7YugnORTO5wxCSxAJNR4c6umdToaCx3GkttlLGavHrlNLuKYxbbm0ndUEZmH752B6a/HyoNMQTP+qPqvSkuMxhe87Ax3m+ZIAceETB8qhjcc4C2rCw7TLHXIoiYAjfl/1V71BJumuKxV2CLIUkfjYEr/AC5QRJ68uuopVhuNXxcFnEqJafZuBExJZG5bajyO81lMZ2ix1tzbVsmUxkCrB8NCJ1kczqd6u7ScUxSX1Q5RkyOoAB3GrTvqCRHWpstaTUm20cmWM6RUT+CqsJnCDOQXyjNAgT0Bqxj7lZVvjHyD9o/lSPGFyHVObb02zFnYL5E1biLIRIFVOE3n/ijhuACJJ94jU0u484ALAzlBp2H7h6Cs3ibyvbcr13qsd27RlrWoVOc+HZid6udYwsVxE/s50FTun+y/14VrWcgXhaxZY0pineAH9nNJYohx+g+IcNt+yJCiaF4ZYKuPKmOMP7KhcMe8D0qdTW2ZT2naXHShuzP9409K+49na4YXQVRwW+UY9wyajcV8WdsHAK9TH1rOZwK0XGkN5gCh01pQ3DwCQVPzomULTddnCPYL5D6Vj+Nmbz6xsK0vZi9KEZSI016CKA4h2X9o7OSQW61UpWMTxC81m6s//sAYEztB0+IY+tWcOvg3GbqFHOAOXoSad9srmGsYZLTrnxAKi1HvJJALN4LHLny2kY/E2ntEPb2YDMOsa1OXTXD9tLieHWCfbuyh5EEie8Nv6mh7DLecNcyO9uQpAX3dImJ1Bpbw3tHaUxczp9vGDyprwnFW77vkdjAEm4ZjMTpI8qjVay4j2/F5UNdUvkVdhuaYYzhVxQSGUgjWM0x46javsNaCAAUa0N7dw9kIIFUcRMJ60QzjWDtSZrjtbbNvmMUDb5OIZhcVhoo0+FJykW2A1FM8Oisr6ax9qU50VCu551phzWeXGthxm9htpU7v/wCMBHPeuu/9nPnXL7f2Za0REeHsP1dqTxTrh5H6sRSaKSo9RtYzEM4UnuTWowikkeVJ34Y6R35E9KccMQhtTU43cZWcqcfdRD3mFL1dXOdCDFS7QAZzpXOCw3dyxA+1YZZaykkbTHeOx3tlC5iQKhnRvxLr5Vnu0VmHAnQ8ppPljYxHPNFK8XpWOO5vb0nCJkGgFKOOdqhalFgvB13y+GnM0oxfaFxZyWjlJ0zN7x8Y/d+Z8qyVxwSYljqSx8fWt8ZqMKVcSxefEBrjFpIJJMmZ0PyrWC2pSD4aHesNxNZYtO0L9TVNnjN9GhHOUaBT3l+B+1Vn4vaQ8PJ6044pkDCcojn40N2f4mMOb7hM57jATtJYH6/OocbvLcRGylGynMp5Ext4giCDSrBoc+k+7qOR1EA+v0oxw1jyeWe7w9o4LxVMRbV1IMjbwjQgjxqrG2WRgY7pO87dK8r4Fjrti42RjEnQ7TNescNxgxNkMSGBG8QZ8D4EGs8ppeOW4VW0IZzO9CqZtmfGjLllkZwZjkfEUIlp/ZaI2p8DUc1tNQPYMJdP9bVmbpGXfUnWtJdR1t3JRhP8JrJve5AzWvjjDy2bE3roFrLmM+Fce6PYhc0nwoLHse7QrZyIrXTKZaOsJfUWSs60szVVh0MwaK/V08aND2e1jHC4QACIPOmGFMN6UJxHHYcuFtlZ5xQPF8ebSZwajGalgyvO08c4a7B2o+1bRSMmteTY/j19mYhvKNKZ4Dj91UDBwTzzSaxy8OVzmW2k8s9fVqeO2Fd8zmMo0rB8WvgXFAOiDMfM6keiifWj7/G7jmWYHyBrM4q/N1mO8j5QPLpVzx2ZbtF8kuPrIY37xdmEkaAiORXmOhDGgnxd5TBKFRE93UidZ1qu00OsHTUDp/CfKiXSZ6g1XSC+53ladyZ+AFAKkf8Ao0wT3TO5/I0KRPlXVeZGUE4kgpm8Y+1WcKw5gv4mB9B9zUC65IkTG3OQaY8NskIDzgkeZk1lndRWMANibIMltZ/CMwPSmXA+036tmMF0cSqyAQw0M+A/Kk9vg9w7hVnfXbyia5jsAUtgEglST6E1OselS02ftTfuXQ7kQJhBogB3HifM/KvU+zHEreItgLAYfhPSNq8Z4fgw2pb0XU/HYfOtBwzFNbuIySChGULEfTWZ18aMrjOhLk9Yx+E7jaDavIreGN0PkSSGI+dep2eNJesZ5AJEMPBhow+INYlsUtlSETcnf8qLZ8Et+o2+D2lthroEjes7xLKxi2mg58qZXsQ9w6yx8BsPtQt3AXCde6On50CkLoZ/KrvZHwo7FWktjNI60L/9WTwp7HD0bDLbuXRcEZulMOOKDbpZwXBgX3PU/WmvHEhKnHnksnnWNv5SQUgeVW8JeTDJ3W2NE9p8KSUIHIz8qbjDAYVCBqADT2WpomxGJRXyBBvG1JMUiF2ZDoSWAO4Gzow8RTHi5gi5GikT8RSjHBVfODvDAjZh/X1pWqxkj66oDoR4x8vnTFl19KT4p9UImDqPD08KbBpANSZa4gkRzJ8tKDD6UXi/ePl+c/SlqPXRjfxjO9pnY1qsO/cTWDC9Y0FZQ7VosOD7NW1gKPTaI08Kz8nxWJmyazSjjY/Zsf63FM2xIyiNTtVVooXh1DJBlSPEHcfCsoohwGMVRkckDxVeXIU6TEIRmtsSw8Tr5RypPj8DlbNZllHIjNA8D+8KHt3wNfZqD4qWEfOqurzA1vAeMBCxZITYAa6zJPqWJo7igRriszQrDQbUr7NcMuXHDuhFuN20zHlA8Kn24SCoU7D71En5D4L4pxG3hiiiCW8OQpB2l40XIFuVWNetKsbLAE+H0r7EWjkUnmK1kTt8qlrRJMmaAyGnyqBhl7us70tyUB7XhMKqOSGmdTXOPN3B50Pg8SgY94fGqO0OKGSQZjrSx4mhlyV8bOigeBosJGHTyFIBxtLpgiCtGNxpCioG2qtI2znFcSVzo0FGIlSN4MjvTpBjbWaWLiQEyRI3XPsOgYcucmj8ZiLruyQjKGMQBMEaaQZ0I3pXfGQzkHjzX4jn6AVNaRTdutouTKJneRPQ05wzd1aBs4F3tteLBFWe6AYYbDnp3j4cqMskALr4eVKiA8edT0H5/nS62NBTLHj3uoPy1parVphfxTe3bjaVqMLb7gE6Rtr4VlHOlajDXiEUgbqNdPDal5DxRvEg6ahd+lFcJti7dVHOhn5An7UEW5c6s4aYuop0BMD1BETWN6VO2ua5hrCkiDl3jWg8Y63E9ollfEMVGYdZihbFlVtONNSafYZVGGA0937VDbLHUEW2D4YBW70AT1rG9rgQVUmdBWo4JaAtiOZ+9Zvtv/eDyFXjlvJllPxZ3GxkSuXWlF6flXcSO4tfEdwVqgUU/YrQEU1uL+ySl+WiB1sS6mFdp86M4dcck53Y+ZmucRwqrccJsCQPSreHKZ1FOXjabOdLcLwe85Z7aZgvvbD4TuegrlzCgQxG+9bPA8TS2uQSMw5CkfGMQmYKBA51z+PzZXPVnDbLx4zHjtnnsqLhgCSF32nl3uR2r7HgEQ4JPTWD0MA1Rxq6UunI/dZVPlpBHy+dB2Lj3HW3lWXYLIlYnmSDsN/St/W9ol+HN6Bg4BnW30/EpobDqCsmm3HLdlLLomy+zCf5hPyBpTh/dHlU5USaU4zYz+6Z+IpQKa47ZtPw7+Eg6fSlarV49Fk4a0OAM2k1/Dty0008Dp9aQhKdcH1tgTrJiSBz2oz6GIhobRtCPn61LCwHQCSM6b/zCpXrRI0KnodI/OhsMuV11k5lkdZGnrWSp29isW8PkEou3Sg+NrZ9g4UAd0xHlSANFpjnPPYmpXFzWpJJEeJoyy1Ojs/q3g+HCWl16/Ost21P7QeQ+9bXAjuL6Vhu2n996Cp8f/oZdEd/3RUyO4Khd90VafcFdCR2IH7NPKllNscO4nlSuphGPaVSl4xsxmp8KPjVmPwjOzuSO6zQD0qjALDRFP8Ayn/TTi2M6GKWdo7GZxApwq6qfAULxu2Qyx3pBOgmI+1cWEy9t/p2ZWSaIm7PtfcZXVAEA1BOstykeIqluCNhryszqwAYjQgye6ND5nnyrSdmJbO3INA+ANLe1QJxCjYZRy6mnPJlMdNLhhc9lPFpNsk+IqvDAZRPSmWLtF7boBJy6dSNR9KS4a4AoMzW0u5pzZ46u1PEm7jGdzG20H6UBZc/wnrMUVi3WAfFjQrWFOqn4Vvh0xvad24I0phwSWR08GmYncDxOmvOlGUjRhPUUfwVwHZTqrCY8j+RNGXMPHsTisQ6EZiST4iNqO7O4oXL3eHuqzDqdB959KU8XdQwCsCAD9fD0ph2QtKzu5JlFkcgc0gz48qi4z12rHnKRukdckUUoXIMxhaShtKYY14sa9K5/bbozxmOJtZgKI25Vge2J/bHXkK3GGPcXyH0rC9q4N7TfT6Vp45ywyvBPf8AdFEX7eVF1mRUMYuqqB4Vbi1AyiOVapG8T9xP5aV0z4nclUEQQKWQaITS8R4XcDlpBViSAD9RS6872mkL3vD/ANUeOH4lkEu0iI1OlEjg7sczt3quWJ0KweZrQcsMxGo8Kz/CuI3LbvIzBiRrOnlWlw/CFQbSaJtcNQkF0EeFZTGS3+tblbJ/A/ArGhI0DGfWuce4cGyudY05aU0wJQEhIAVisaCDJ3HxoHivEVe4+GCkkodRybcCdpA1rC4/HTMvuiKzo+lZbJlu3OjsBrA94/mK2i9mrkz7QGsjxdPYYl1dM8EEiYmUGp8TPLSt8cOeHNnluaoTE3AXPgBESBrz51Q5SdVK9Y+4ojE3muOXYROwWO6Bso01ihHPgxPQgVvjNRjbymUHJifLU/nQzoRqCQT1M1wXsp9356V32hbX6D7mlTcS1NOOAXgl3+ZGG/8Ai/40vReeX1Y60bwxh7W3I0zqD5EgH60XHc0eOWrtvMPhWNkXjop1jmBRHEHBw8DYxBoniV/J+zVZULqPCgMe/wCxUAHcVzZYydN7lcpyPRO4mp0A+lYrjVi491nCMQDvB5Vs7D5siAyx5elN7vCfY2iXMk6mjG5atkRZOnkWIuHMCd9KtxNwsQfKjsXgQ9xjOUZtNqGyBXEkFQQDWvxLmNxGaOgj+oocYjoaJ4yiq5ynTlQYst4VRPYlwo8Kn7AeFXjQVJRNBKBZFK+0uNGHw73AJYQF/mYwD6TPpTtkFYn9JOKAt27XNnznyUED4k/6ak4y3DOMwye10kqM8kyA27k+Gmp8DR9/HBrtx0bQt3SCOSgAg+hHpSG5ZBSDyr7htzIqjxGnmCWH3HrS9ZzV+1mo9YwVlXtW2BOqIf8ASK867d2MmKB/etqZ6hnH0Ar0Dsq+bCp/CWX4MSPkRWS/SfZGbDt0uD5oR9/nV4oyZNYjnVF4p4/f6V1I5/fSusnQelaJSw2Bz2cQ4P8AdLbYTzljmjyUE0vsHz9DW47F4JLlnEK4kMQvkCjD71iblhkYow7ykq3mpIP0pfQIRCd5q/DGHQnYMvp3hVFoaf8AZrrgQaYeu4jC/tZJ0ap4/CAqAIjMKLwmLR1BbumBvV1/DZ4ykaGd6w5WGscMVHFwe8BVPFzibgKggqdhTcsRuKgbtPkcMBiOzGJeJIEeFQxHZG+VgETXoJv1H9Yo5J55d7K4gkd0Rpzov/7Uf935mtsb/Wo+360cjZi2HNQOGYc6IzDrUC/nVJD+ybxryftZjPa4ptZCnIvknd+BbMfWvUeN472Vi5c5qhj+Y6L/AKiK8Ys6uSfwgD7/AHoVO19892KEsyVgbqdOkGRRbn+hQlkwxHjrSh5dPQf0fYvMty30V1HhMq49O58ao/SdZmzaePduZfRkb7qPjS3sLicmJCk+8HX4jN9UHxrTdvbWfBXAN0yP6IwLf6c1OcVN5eUI0aHY+NXMNN5HyrlpwQM2nWpMkDlHQ1oTafo4aUvrzzIfiGH2rJ9qUjGXwQR35HkVUg+UGtP+jRu/iJ8Lf1eqf0kcOAdMSPx9xh1UFlb4Zh6Co/0PjI2RXLmx8vtX1mpFCe6N2MDzOgqw9mFpcoBAMAD4CqHwgBlXZT0J+m1HZRX0VioHbOIU6OGH8Q+4ohuIsvv2sw8V1+RqeU1xhQFScSwzaEsh/iDD5nSiUso/uOretUG2OYFDvgkYzEHpp9KY0YNgT4fCo/qfQ/A0Cli4plLzjoe8PnRH63if30/yn86Ng8qBcGuq3KK40eVMmK/SDj5VcMvOLj9FBhB6tr/hHjWDwyg5jyJ+QAFb3tRwZy16+rZs6KsbZFTvMWM6qRmHSR1NY/D8L/sy382pMAEaQpgkmZEak+lScAO3LxqGJwhRLVw7XfaQOiFVn1M1f+psELsRoYHXQGVPPcaaRIp721wJtWcEnNEdD/MRbY/PNRj2eV4JOF4r2d+3c5K6z5TrXsGKsK6lG1V1KkeIIg/KvETsRXsXBcWbmHtPpLIsnqBDfMGqyRHjlyw9m89lu8EdlIPMAkA9JEH1qWKZRoqgE8/Ciu1ThsbfdWzd8RlndURSD5FSPSk5Lk7fGrl4Db/oy1fECPw2/rc/Ojf0jWXNhGC91XObaBK5V67kj1qP6NrZVL7TztrtpoGP3FR/SZih7O1anvOxeP4VBHzLfKp+n8YCy2tOuz1gPirKnYuD/lBf/jSFGjzp52SzNi7RClsrZmA5LGUsfAAsDVXpMequDGhroDnnRSDppX0dKhYB3cafOK+9uaPydK46DwFSAFvFzodK+bFLRT4VDyFVDApRyaoYoUR+tW+tQ/VE8K5+qJ4Ucjg9ER61FlEGd6jlMe6AfMVCSZ0kbb61SVeKsB7box0dWUxvDAg/I1lcb2SZkFtLqrbVTlBRgSxVQSxGnJtfAxzNasuYjLNR9sT0MbGpNh+Edm7pxIN9AlqyFKgHMrsNRBJk97vGfCrv0lj9hZccrsfFGP8AxrZEjbXXU6Gsv+kO3mwo/huWz8ZX/kKqdlXm7pBr0nsFfz4XJzR2X0MOP9xrzcnQeVbT9HN8g3knT9mw/wBQP2p0owXErrvee6wVGZySFkQZ10nfx6zUFdzsT5mPpRWOthcReXU5btwAno7DXrQ1wT6eFWHp/YKzcXCjPEOzMmkd1o1Pm2YjoRWH7ccRF7EsBqtsZBrzUnMR6kj0rX8Fxb2uFi6xJKJcKzrs7BB5e6K8wPXXr49aidiorW//AEZYAE3bxGoyop8Jlnj/AEf0awANe09m+HjD4dEiSFzP4521b4belPLoQ4GlTzVUjnw0+lWh9tKlTi1BhNSN3Ygfaoi4DJ8N6A7lqLRUfbg6Q3zqWcHpQETFcnrU3TpUcvSgCkzHY6+sV1lPOZ6HSp2boJIAmDyqV1wdZOnLLJ9KCCAa7fGpS0xl+FWtDbEj/DFRS+BpmB8SQZHwoN1rc66yOtKe0uGNzDXUiTlkQQdUIcT6qKbm+msEDzBqm4gdGGYAMCPA6iPvQTxFhuK1P6On/b3PD2f/ADWPvWVweFuu5tojO5OigawNCT4AeJ0r07snwBcMhLuDceM8bACYUaa7nXnTqY8042IxWI/+W4fi7EfKhGFMe1B/tuI0PvnfqBHyilz61UNvcPcQ8GbMYOR1BPMi6cq+pgetebxBg1rbV5H4Y1nNDi93BvmhRcPkILepFZRiTow1pQqcdksKlzF2leSubNA5lQWAPSRr0r2YKN4Irzj9GvDSXfEFu6koo3OZgCTryCmP8R8K9FEaa/L/AKqclR9bB11+n2qxVA/r71E3BG8+QNTy+LUGi0cq+9kP3jUl86+Z42NARKDxmvvZ6bgVJmjmK6tyRpFARVR5+VV/1vVxYbAia+zdPlQSKIZkQfID61022J1E/D8qjbzZdCWPU6b/AMNWHUkFTAG8ET5a1JuLYZfdAA3Pe/6qaMZ3kHkAPrNRFsiIkCPDf1iakrmcobXfntVB89vXRdeoMeW+9RWwRsQCfP8AOuvtqsnfQEwfHWK5bneX8iIAoATD4BVLFCiu+rsqhWY+JI39amcI06uD5jf1mr3Pn8/yoZz3ipgzqAZOnoPGkTyTtnbjG34PNPCP7u3ShhMDxrVfpGwgS+jhO66CW0IZ00Ijl3cu+89DWXuO0CFKeS7/AArWdEtud1RlJEGQRyP56V27iiUylVkxLAQT0psOH2WwQuI7m6GVboY+7mBjKI92V0PnNKryKAqwZG/umdNazy7VOnq/ZXC27eGtqkHMAzzIOc6MIjSCIjlFNrqA6gCaVcCuaDKCUZLb5ojvMpDg/wCUHzamz6GQBMf1tUhNF02APPYfSotl8Z9TUA+mrAE7Qx+/OushA/EfUz9aA69sEDQ/FvzqCoNiWHq351BGOYrlMxMkffNFSKGPeM+lAfZVGgn/ADb18qgCYYR4mq1czJb07sg+dRulSNSY6Hb4VQXKJ1HptUcr/vj5V8twMAVIgjfaflUMvQf16VIXu8N3iMp0AJeSdIhiIA9KtcE/gOng0H/b8qDwzK6h432zZJ8xpVrs0iHSBvquvrk0qiFI0gHIR0gGOmi1y5ZB1KeRI2+VCmNsyjnuh/41WSqNmJzk6QGECdZKgCPOpAxLcABlBJ/hj4d2qkKD3VHxc7aERlqCXE/h88yH6k1206wSWQCdMpSI6kjWgLkcsssCOkMT8hUA42H+x64zqdM48syD5ZaqS6gJQMRGssUIOuwYjXyoNn+12IS2tp374DssFMpJYSCM2mgUj1pOnH8G8KbepHO2GHxWYpn2yxFlrYTNmfOGSDb7hG5OUbRmEa/cYi3ZknTloBI/EBoCI0mnLoa2e47CBLQcJkW64IMRmRbZKxO2tw/Ckt+3JVShA394SeuorVphfaYJF7xeBkJySroSChlpCmCBO0keApVhsVbIyuAjoYM6ERuBPlSyp4/ps+zLzhkVj7kpqByPdGx5EUzFsJMKT5BSfmtKeAybKsveDMzaquqzAZSdTt5a04HrH8tE6F7WMvmNvwg/8aqJObfTqpn00qNxurDyVhHrUlJIBGs/z/PWgkbjJsHIPmAftVVq+PcklgOe5jn72tWqrFvd5RIZ/gdtPjUXQ7GfKWP3oD6+hIBOvx+zVTZJjLooXQDvHSrmDfvn1zGqXdddT10cx8tKA4zMNj8VMEf5aj+vW/30+I/8aoNzK0gCDz1jnrBXryq7MP4Pj/1QYkuJ99fR2MadBXQ6Tq9sxG9wmNCPHTSfjS2yyFw+Z5X3e7O/+D5zzonPLe887zkT65Kol9zF5SE0aROjggCYhjy/rwqLsxIi6oGkqGUzrr3ggjn41Q924GjM+U79wEjTwy6+Ggoq1iVGkuT/ACtp0jLUhYpaZz78s0z8EH3qwsTpnJ18V58oiaGTEhmKr7QleQCCANNzA3rl1M0Fkcx45I9RPSgPhCACTCmAAVO88zJqxnMGM+n8SDX5GPWu+0IGgIBj9z4AazUGFyZKjLG4IkHynUUGR8fstdVF7mYSfezRPJeZ+VZuxgVgIwfMIk6mCOe22lFdocFiRca5b7yGICkBhA2yHT160n/WcUwyZLuv8KD0nSjVOWNZYVks5EiGAJbQBWnVoid+90PyX4zC+0eXVG65EaenlRnAg4tKHBDamGyk6kkSR9jRlxdQRHry+Yo0Qvh+JIUCR4clHwGlMFywe7JnlkP3pTh2A5fIxRKi2SoK68gRv8tfKgCiF3yEf4VP086mrA6R6QT9K4jDUR8QDHoNqjnbmoI8QpHxUkyKoljL0/3aRrsKrz6e6Z/lc7HkfSouwH4R6W3PltXWu6awPNGHTWSKAhc15sI/hf7iou8GdATuQra+f9eNVhROYvAI5Foj/N/X0qvsADDTPKW+5I8eVSF7XPMkaxDgH5Ghv1pv/wCX+o/+NQS9p4RyLNPoD9Kj7X+IfFqDVXMVBAL3AdNAi69fd6VarudncabEWh/xGlfV9QFti1cjvO4OuxtxqdPWrkttsbjzEHvLMjmBtX1fUCo3QqajNMatnaTJme62vP41JAsBpMHWTcdjr0zR+Vdr6gRXdHhI8SXZt/PSrWCwJVtNR+0J9dDX1fUjU3TvMdO8dPSaBdcwhRz2gHrOu9fV9TJK3bIHj8q5eJiBofh+f0r6vqAmjt09GP5UQrgasDp1NfV9QF1tgw/F077fMfapBTy+PtHr6vqA+uuw2aJ8GGnXvc+kGq1cxq08iSVr6vqCVtcVcqyQDyzCPLU1N3HX0I9Nq+r6gy/EuSZDEf186qzeMzz7w/Kvq+oD/9k=)]  
            col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4 object-cover bg-cover bg-center bg-no-repeat bg-gray-100"
          >
            <CursorArrowRaysIcon strokeWidth={1} className="h-10 w-10" />
            <Typography className="mt-5 text-center" variant="h5">
              Clothing Ad
            </Typography>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {menuItems.map(({ title, description }) => (
              <a href="#" key={title}>
                <MenuItem>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </>
  );
};

export default Notification;
