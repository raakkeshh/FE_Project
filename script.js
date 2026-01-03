// --- DATA & STATE ---
const defaultEvents = [
    { id: 1, title: "Tech Symposium", category: "Tech", date: "2023-11-20", img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMTExMWEhUWFxkXGBgWGBoeGRYdIRsaFxodHxoYHSgiGRwlHxobIzIiJSkrLi8uGB8zODMtNygtLisBCgoKDg0OGxAQGzUlICUtLi0tMC0tLS0tLS0tLzAvLS0vLS0tLS0tLS0uLy0tLS0tLTUtLS0tLS0tLSstLS0tLf/AABEIAOgA2QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABKEAACAQIEAwUFBQQIAwYHAAABAgMAEQQFEiEGMUEHEyJRYTJxgZGhFCNCcrFSYpLRQ1OCorLBwuEkM/AIFWODs9IWFyU0k6Pi/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAIDBAUBBv/EAC8RAAICAQMBBgYCAgMAAAAAAAABAgMRBCExEgUTQVFhkSIycYGh0bHwI0IU4fH/2gAMAwEAAhEDEQA/ALxpSlAClKUAKUpQApSlACqa4v7TBFm8IRi2HwpZJgtj3jMNL7XFym1vUNVy1i4vLYZf+ZFHJ+ZFP6imi0uTySb4IDlHH+LzKQx5fhVjjU2fEYgkqn9hCNTW5Lq8r7VYODhZECu5lbqxABJ9ygAD0pgsFHCgjiRY0HJVAAHU7CvehtPgEvMUpWLmOYxQJ3k0ixJcDU5sLnYC5pT0yqVr8NnuFk9jEQt7pFP+dZ6sDuDcelAH7SlKAFKUoAUpSgBSlKAFKUoAUpSgBSlKAFKUoAUpSgBSvzUL2618zvZWI3IBP0oA+6VFOC+PcLmA0qe6nA8ULkavUqfxr6jfzAqV1601szxPIr4llCqWYhVUEknkANya+6x8wwizRSROLrIrIw9CLH9a8PTA4Wz+PHQDERbKXdRfn4WKgnyuADb1qre37O7vBg1PsjvpPebqg+jH4isTsjyrGpj5oVmeLD4aRhOv4ZGBKqoBFrmwJI3sB5iol2lfaDmWJbEIY2ZyUB5d2PChB5EWHTretEYJTJSk+ki5UeQr1w8zJ7DMn5CV/SvilWIlqdiGfzvjnhlmllVoGKiR2YBlZOWom2xarzrmbsmxXd5rhT+0XT+JGrpms1q+IvW9hSlKkUFKUoAUpSgBSlKAFKUoAUpSgBSlKAFVxx/2pRYTVBhrT4jcE844j+8QfE37o+JFRftZ4/xQnlwMIOGRDpdgfHKCoYWP4EIPTc+Y3FVMBV4VeLJTs8Eb3B8X42PFHGCdmmNtRbcOv7BXlo9Ba3Sxq/uB+OIMyjIH3c4H3kRO/lqU/iX16da5lr2weLeKRZYnMciG6spsVNUnBSEjNovkdjeCDaxNiFYNqBV1BU3vcELtU9yzCNFGEaV5yOTyadVugJUC/v51VOUdtaLhv+Igd8Sth93pCSfvEk+D1Fjz29ItnHa5mMrgxMmGQG4VFDE/mZwb/ACpdE5clOqK4Oiq1sOaD7Q2Gksslu8i8pU5G37ynZh5FT12rPhjtpQ6Ux0RQ8u9iF197ITqHw1U7SMwxWJfCy5YDi0HjjlhXUYJVNmGpeQdWAKv5e+l7t5wz3rWMotfDYRIy5RQpkbW5H4msFufWygfCtVxbwtBmEJimXcbpIPbjPmD5eY5GtxBq0rq9qwvbztv9a8M3hleGRYJO5lKnQ9g2luhswIIpE9xmcvcW8LYjL5u6nW4O6SLfRIPMHofNeY+ROkrY5/isU8zjFvI8yMVYSEnSQbEAcgPdtWurauNzK+TYcO43ucVhpSbCOaNifJQw1fS9dXYHHxTLrhkSVfNGDD5iuQayMux8sD95DI8T/tISD8bcx6GknDqHhPpOv6VRfC3bLPHZMan2hf6yMBZB712Vvp8anmc9qWXw4dZo5PtDP7ESe3f98H/AJYHr8AazuuSZZTTJljMWkSNJI6xoouzMbAD3mquzDtpgXFKkULSYYGzycmP7yL5D1sTVX8XcY4rMHvM9owbpEuyJ/7m/ePwtyqP1WNS8ScrPI6+y7HxzxrLC6yRuLqym4P+/pWTXMPAnG82XS+G8kDH7yK/P95b+y/0PXzHRuQ51DjIVngcOjfNT1DD8LDyqU4OJSMuo2NKUpBhSlKAFKUoAUpSgCme33IrGDGqOf3MhHxaMn+8PiKp6ur+LsmGMwc+HNruh0k9HG6H4MBXKUkZUlWGllJBB5gg2I+daqpZWCFiw8nzSlKoTFKUoAysqy+TETRwRC8kjBVH6k+gFyfQGuqeGckjwWGiw8fJF3PV2/Ex9Sd65p4M4lbL8SMQsaS7FSG52PPS34T6710PwjxrhcwW8L6ZALtE9hIvnt+Ieo2qN2fsVrwSOovxhx5hMv8ADKxeUi6xILsR0JvYKPUn51KK03E/DGGx8Xd4hNVvZcbOh81bp7uR61BYzuVefA5t4z4i+34psQYlhuoWykm9r2LE82sbXAHIVo623FeSnB4ubDFtfdts1ragQGBt52P0rU1tWMbGZ87ilKUHgpSlAClKUAKtPsEwM7YiaZXZIEUK6/hlc+yN+qje433HnVXwQs7KiDUzsFUDqSbAfEmup+CuH1wODiw43YC8jftOd2PuvsPQCp2ywsFK1l5N7SlKylxSlKAFKUoAUpWNmOOSCKSaVtKRqWYnoBvQBoePuL48uw5c2aV7rFH+03mfJRzJ+HWuZcdi3lkeWQ6nkYsxsBck3Ow5VtOMOI5MfiXxD3AO0aH+jTovv6n1JrS1rhDpRnnLLFKUpxBSvSKG+5OlRzJ/QeZ9K/ZZFtZVsPM+0f5e4UAeVWN2JcOd/jPtTD7vDbj1kYEKPgCT/DUY4b4NxuN3ghbR/Wv4Y/gx9r+zeri4IVcpgaCfFQzeIsEgjOpWPtXfV4ug3AItUb7oQju8F6KJ2SxGLf0LGpUMn4/T8ELH8zAfQXrH/wDmA39QP4//AOa5r1tC/wBvwzqLsvVP/X8r9lb9umCKZiJNJ0yQRte21wXQ7+dgPnVdA10rHx1C+0sDAemlh8javLE5Fk2Yc4ohIeq/dSf3bavrWqnXVS2TMl/Z2or3lF/36HOFKtbinsZljBfBSd8vPupLB/g3st7jb3mq0hyudphhxC/fltIiKkPfyIa1vPfoK2qSfBgcWjEpU1g7K8zZwhjjjJBILyrZrdBpuSfhUOxELI7owsyMyMPIqSp+ooUk+AcWuTzpUs4GyHD4mPGyT3Jw0ayKneiJH1FgdUhB0AEDflvvVjcTcA4ODLMTJFhEaUQ60ZXZ3jsupm7yR/GoIJ8IFxtpNK7EngZQbWSJdh2WQy45pJGXXCmqJDzZiSCw89I/xCugq5EyfM5MNNHPC2l42DA+fmD5gjY++up+Gc7jxmGixMfJ1uR1VuTKfUG4qVyecj1vbBtKUpUSopSlAET7Uc8OEy6Z1YrI9ooyDYhm6j1Chj8KoKHjXMV5Y2f4uT+t6nXb9nGqbD4RTtGvev8Ama6qPfYE/wBoVU9aq4rp3ITk8kqh7SM1XljXP5kiP6pXnn3HuPxkPcTzBoyQxARVLW5AlQLi+9vQVGay8qyybEyrDBGZZG5KtunMknYAeZp+lc4Ey2YlKn+F7H8zb2hDH+aS5+Sqa3+C7DH277GgeYjh/wBTP/ppXZFeIyrkVEiEkAbk7Cslol/sr7Tftn9lf+vWrywPYvg0vqmxEhItzRduttK7XqIdrfA0GBiwsmFDhWcxMrMXuSNSkX5HwsNudxQrIt4B1tIrlVeV1RFLMTpREBJ36ADcmrY4a7PMPg0XEZiO/mI1JhlFwv57e1brfwj1re9m3Bn2CD7RLF3uMlCkJ4Q0KEgEKW5EBrsQegHQVPY8QQupo+73KksymwBspJBJN+YHw2qFtjaag8epemEU1Kaz6cEEzCbH4myLBLFFbwxqpRbdLk2v+npWGOE8Xv8AdAWF92G/PYeZ25eoqRRyTSqkUZGGAeNg5UKUIbU33IlLHvb+w+nSGN7napRDEkIcl/bYuxdh1sLC/JQAAB6VzHoYzeZybZ2V2rKuPTXCKX3KZVgRcbg1ush4clxQZlsiLtqb8R6hf58h61oIGXS2g6lV5ArDkyh2CsPMEAH41dGRxBcPAq8hGn6A1h0umjZbKMuEdTXa6VNEZw5l+DW4XhHBj+j7wjYlmY7+oBsPlXxnXDMLRN3MMIkFtN7qL3B3KWb059aw+KeMfs0xw8cBlkCLIzF+7RdRIUXALE+E3AHLrWBkfEUuKxAjkjij1+K6AsWKC4DFxutvKxBA3rpP/jRl3eFn6HEitbOPe5eFvnP/AH/B7HM8Vg9DNFI0LXujHWYrad+9BOkMSQFYn2ee+25iweDxskOLUAywtdXGzrsQUbzFidj7xXy8ZxUOLimg7lQxjiZ/xqqqUk35Wcm35Qarbh7O5IhHPGd2QMy/hYEXIP8AOksuemknzF/j++XsVp061sJeE17NPz9fX3LhxWG1NGw06ka9yBexBVgDba4P0rmvtCwYGZY1FGlllLAftBlVz8bsfnXTIe+kggA7+8W6b7dK5/7YsCI8zfRsZY0mU/v7xsu/mEU+8+tdOl7nGsWx99hMw+3zRNylwzD36XQ/oTV4Y/J4pBL4fFJA0F7mwQ32AvYc/oK547N8Qy5pg5IgSHkKSBRfTqUq17chyb4V0waLfmCvg45eEoSje0hKt7wdJ+oq0OwziTusQ+DkayTeKO52EgG4H5l/wVBuMowuPxYCsg752CuLMA3jFx0vqv8AGtODV2uqJHPTI7FDjzHzr6rj5cXIOUjj3M3869UzSccp5h7pH/nUu59Sne+h15SqM7Ds+lbGywyyySCSK663ZrFSDtqPOzH5VedSlHpeB4yysnKnHOYPPj8VI6shMhAVgQyqvhW4O42ANvWtHXUfF3BWEzBfvk0yAWWVLB1+P4h6HaqH4y4AxeXksw76HpNGDYfmXcp8bj1rRCaexGUGtyKVK+yvGGLNcIbhQ7NG1+oZWsPiwWopRTYgjYg3BHMHmCD0NUaysCp4eTsFcQN9XgsSPERuB1FjyNeoNceYmd5DeR3kPm7Mx+bE1012XTFsqwdzcrHoPoVYpb6VlnX0rJeM+oyeLOM8Jl/djEMwMlyqohYkC1ztyG4rQ5bn8WcPE8eHZcPhJhK8k+kAsEbSEVSbkagxJItYbG+0C7asFjleKTEussAeRYWQAWLWfSVtcHSthu1+7JuL2qbYfB/YMmgg5SSqNfnqfxv8h4aS2UaqnMrRXK65VrxMzIs8M+YlifAyOiDyAsw+JsTUqxcUveFkYaO5YaTv95cFDb53+HlVZcMS6cXhyP6wL/ECv+dW7WDQWOcG3zk6na9MarYqK26f4yUThXdgZHd2llAMr6irMbLcXS1gNIGkbeGv2TDI27KGI6v4j82vVmRcB4UE7yEFmYDVYC5LWFhe29ZmD4SwkdvuhIR1kJb6Hb6VmeivlJ/Ft9Wbo9p6SMF8O6S8EVXba1XBw7NrwsDD+rUfIAH9Kq7iDDd1i8RHtYPqUAWAVgGUWHluPhU/4Bkvg1H7LOP7xP8AnRoU675QfkedqyV2lhbHz/lEY7SMOFxcUg/pISp/8t7j/wBU/Ko3G5UgqSpHIgkEe4jcVM+1FP8A7Rv35F+aFv8ATUKqOvWLsr0NPZMurSpPwbX99z4ljDX1lpL8+8dnv/GTX1pFrdOVftKxylKXLydKMIw+VY+hbGRSxyQYV20l+7ut7atgFYjr7/fXljuDsDNKs0uFikkU3DML35+10fncar2rD4LiWbAiNxqF5IzuQbEk2BFiNj0NbTOMecLEO7hMtlIRAwFyqlgtze1wp39PWvpaJOVcX6I+I1UFC6cfJv8AkycOsMQAVEhBYoo0hbnfYAc72J91ZHeWC6rAnbY7X8gbVSj9tuIe5jwkSgDVZpGYm3S4Vbe+1W5lWPeeOGZVXu5Y1f2jqGrfysRa3z9KtKLXJnUk+Dn3thwvd5tiT0kEUg+MaofduhqG1ZnbzhgmMwxHWAjnc7OefW3i2qs61Q+VGefzClKUwpIuzzH9xmWDkvYd6EPucGM/4vpXUtcdRSMrKy+0CCvvBuPrXQv/AMf/APgT/wD43/8AbUbY5aZWt7FgV8uoIIIBB2IPI19UrOWOY+1HAwwZlPFBGsSKI/CuyglFY2HTnyG1RSpZ2rn/AOrYv8yf+mlROtseEZZcn1Et2UeZA+tX/wBi+NZsC6hdQjlm67ksRIoAta1mO5PlVCYIfeJ7/wDera7Doo5GnRi4eMYeRdMjqGHi2IUgMNQ3B53FJb8o9fJL+0rLFxMMHMn7bhUYEmw+87s2B2v94bkc/gK8O0iX7yFByVGNveQP9NSviZL4Z26xlZR/5bLJ/pqF9oZviEPQxi3zNcrtB/4Mep2uyIp6pP0ZG8PIVdGBIKspuDY7EHn099XRh2JVSwCsQLgG4B99hf32qkmG1XDkxEkOHltv3S2PldVv+lZOzJbyX0N/bkfhhL6o1eecZQ4aUwlJZJFUMQiiwBvbxMQLmx2qPYjj1tbPFg/EyhbzT2AAJI8CK46nkRfbyrx43yqUYsOqvKGhW7WvujsDfSPJ16Vg4ThnFSGwit6sy6fLmCbnbl0p9RqL42OEF+COk0eklSrLJb/VLx9zXZhjZJ5nnl0hnCjSgIVQoNtySWO5326bVNOzbFeGWK42fWAeZuoG3u0n51G844flw0feStHbUq2ViT4jpU8uRO1ZXBOOSLEHXtqRgrG50keLkOdwD9B1rNTKyOoUrOX/AOG/UQqs0Uo07peW/G5J+0mDVgi45xSRP8NYRv7rNVbtyNWlnOZr9nnV4GntECU2Am1ErYC5KjkbnYBudwbYHCmDweITvBhBGwttIQ9wQDqW5N1vcBiBfSa16vTd9NYeHg53Z2tWnql1RbWfD1PXL+HsEsCTSRXBRWOss1rgdPefKoxx5hEixUaxosatDqsoAFw9r2HoR8qs8kAeQH0qn+JM6XGYozRbwpGIo2/rPEWdx+6fCAeum/I17q664UPZeHgL2fddbqk221v4vgmHZrJ91Mt+UgIHldR/L6Vu87lVoBIrKypIjFgbgBZAH5dQAw+dQrgXMDFJMoAbUgYAsFvpYA2LbXsxO/7NSjN88w0kGKjSVWZVaOy73cpqULb2jv06g+VV0Ms0xIdq1uOpk/PD/H7ObcThxFi5YhyWWSP4BmUfSuhezDHr/wB1YHUwB0mEXPMozpYfBD8BXPnEEl8bO3K87H4696luRcdS4XBfZItaSfanIkXQdKG7kAOCLk3HLka6tkXJI48Hhs33b3g9S4TEqyOpZo9SgXsyiRPED4lsrW/NVQVKuJuOJcbg8PhpI94mDtKZNTSvpZSSugBR4zYAm2wqK00E1HDPJtN7H6ouQALk7ADmTU64W7KsbirPKPskR/FILuw9I7g/xEV+9iUQbNEuAbRSHccvZAPv3rouksscXhHsIJ7sivC3Z/gsDZo4+8lH9LLZn+HRP7IFSqlKztt8lksClY2Y5hFBG0s0ixIvNmNgP9/Sqa417YHk1RYAGNORnYeM/kU+x7zv6CvYwcuDxyS5Iz2wxac2xP7wib/9aj9RUMr7mlZ2LOzOxNyzElifMk7k18VrSwsGdvLPbBH7xPzCrJ7EsSEzFkP9JhbD1KOP96rFGsQfIg/51KODM1SDH4PEObRrK6Mf2QwYAm3lqv8ACvJrKPYPDOlWPeRG6ldSkFWtcXHI2JFV7xUhaDAyn8UIU+8BT/mflXlhO0bKsNJII5ZGVnLuRC5EhI2C20hNPI3W5sOfOttEoxuVCWMbapJYhzYIHeyn97TcW9LVzdZU5UyR1OzrlXqYyf099iE1ZvBuKVcDGzsFUMVuxsLlyoFz5kgAetVlWywef4mKLuopFRbk7oGIv5Emw335GuLo7o1WZlxg+l7S0076emHOcltrEASbbnc/ID4chXjjcT3akhGewJAUc7Am2+wvy36mqkmznFuArYuewAHhKoT6lo1BuffWBMNRvI8kpO15ZHf/ABsa6Eu0q1wmciHYtz+Zpe5KeKuJIMRhsQguZGMIjHgYllk1lAYySVUxlixNt6jV6/EjsNlso22Gw9NthXrhcM8jhI1LseQH/Ww9TXO1F7vktjtaTSx0sWur1+hk4LMQiyK8KzCVCj6ydRG5G7agbE3FwbdLV55Rmb4eTvIlCbKpBYMzqN/E2gWud7KLC5tzrZT8J4pFZmVfCNRAa5+AA51iZJk8mJkKJtpBLE9OlreZO3zpnLUZjFp58Nt/cRR0bUpprH+2+3t+j5znPsVigUll0RnnHCCgYeTMSWYegIB63rXgW2GwqZHguNkcRYgtMouUOjY29lgvsn1v86xeDcsixMM2qPU49kn2lBXoDsGDA8+tPZTqLJpWePHl+CVOq0dNUpUrZYz5/kizgHY2N+h6/Op/wBGIsLNLba5ICjoq32ArWdnumXDTBwquwW5IF11JpI1dLMDUq4QVY8JhYi3jMWog82It3h+DN9RV9FpmpKzPn78fsydqa2MoypS3yvuuf0c35Fw/i8wkeSCHvLOGkOpFClmLfjYX68r184PBu+ISGxEj4ox2PRvY39xO/uqyeyYdxm2aYW3PUwH5JTYfKUfKthxJws8ecYbGQxEq/eSMoIFpVTTcHcAkHULi10N+ZNd52b4PmejYrbjngiTLO41zJN3we2hSunTp8yb31enKotV09u8avg8FMhLqJLK3NSrRsb3G1yVXf5VS1PB5jliTWGWX2CYfVj5X/YgP95lH+VX5VLf9nxog+Lu6iZxGFQnxFF1ksPMXYXty0jzq6az2/MWr+UUpSpjnLvaBmmLlxk0eKkLGKRkVBtGoB2KpyFxY35786jVWT265P3WOTEAeGeMX/OnhPzXT8jVbVsg8xRllyKUpTHgrKwYLBkUEvcMgAuSRuQANybeVYtXH2IYGM4TGTLGJZw+nnZrBA6KrdAzcz+tqWUulZGissqzN8rmitJJDJEj7qXRlF+ouwG971eHZFg8XhIWw+LRVjdtUBDq27LrZfDtYjxD3N6X0Oa8fPNgsThsywE0cjhlQJGQo28LapTbWrb7X5D3V79kudfa8DLgXk7ubDopik52UEmNgOpjawI6jSOtSm247lIpJmz4w4eXDK84fwtIqpGF3ux5XvyG55chX5mnDIjwi4mNnk8KOwNrBGA1EAC/hvfnyBqT59ghipsPh33UJJMxHRrBEIHvZj8K2GWYPusNHFKwsg7sm40sL6V5+YsLetq5UtFX1vbZr85O3HtO5VJ9XxJ8Y5WCH8DZTDN3jTIri4VQ3oNTG3X2lrB4WhLYnERcmDzKnhuo0ykISDY6dNtwRzFSvIssOBAQkMjyuoBPQgmKwsbtpVVO45E35Co9gkMecSKd9chPUe1EGXz/EtS7hVQhlbqW/3L/8p3WW4ezi2l9DcYTiMS4mTAth1CeNNZkuXITVcrp5Mu99RPKsXg6FYsfiYQNlRdBJuStkYm/ldvoK9cfmmCwU8l4ZJMSxMhKxANZiVHjOlQLLpBvchd60nCuZPJmXfy2QzFl0g3CKEsi36nwi58yarZKKlHqab6tvRMhTXOVcuhNR6N88NrfKPfIsdiJMdNFNPK2psREBcBUAZimlLab6VG5BO/rXrkWPjwmPxUcgWONn2sAFj2WRLgbD2j7j86y04cxC5m84QdyZRJq1LyMaqwte97g9Ota7PWw4zdxL4ojHEZOYCMQ6i5X0VCfQjypJ9cU2/Ce2fJ7e25StVTlGMeJV7qPOVv77eJnLwnCVlbA4x07ws7CJxdiWLW1xlWtdvOvHs7UxYiaBvCwXxKWudQa7b3Nz47363rYQYDBYSb7aZ1iU+FU8Fl1ALa63LAkX+Na7hN2xGYz4xIyIGZrEgjbu0QGxF7kre1uVNKGJRljD6uM5Tz4iRt6oThnK6eWkmmuFnx9zJ4DwTxTYwkWjWSSPfbcSMygdPZYfMVFslzl24g7h7iKBMRCF6WY96Wbpvtz28K158V9pxw88kWEGr/iBJJ3gsLBVDRjqCWUkm21+XOvlu2CNo2RME/eyKUt3iogG6gh0Gu+kgnYWI2PWujVS64tLxz+TlXX97JN+CS9lg+sixkacRyShrJiR4CQRdWhR72NiPEnX/OpzBxfDFisbh8XKkJgZJImlZVDRugPhJtcq2pfiK5/izN45vtSaVZGtEAPDexB2J3UKSNzuOdYuc5vNipBLO/eOEVNVgDZb2vbmdzvV3XlmdWYLdzzEjHcOST2N1dnJPPwTtbn00/KqUr2+1yaO77yTu9zo1to33Pgvp3O/KvGnjHpElLJ6YbEPG6vGzI6m6spIZT5gjlV39nnaqk2nD44iOXZUl5JKfJuiN9D6cqoylEoqXIRk0dj0qtOwzGYuXCyGdy8KMEg1btsPGNRO6DYAdLHyqy6ySWHg0J5WSA9tWT9/lzSAXbDsJR+X2XHyN/7IrnQsPMV2NNErqVZQysLFWAIIPMEHmKwockwqexhoV/LEg/QVSFnSsCShl5OSYgW9kFvcL/pXrNhJFAZo3RSbAsjAE87XItfY/KuvlhUclA9wFavirIY8bhZcO+wceFreww9lh7j9L0/fegvdHJ9THsvbMftEgy4x6tCmUSn7srqspI5kgk7ruLnzqMZpl8mHmkglXTJG2lh9QR6EEEehFZPDufTYKYTQEBrFWDX0uptdSAQeg3BBHSqy3WwkdnuXvwlnGJzH7VhcxwXdLH4SwEgjl3ZWA18xtcEE+dUtlMv2bNUAcoi4sxMym33fe6GBsd1tzHI2qQ512wY6ZNEaR4YWIYrd2NxbYuPDbmPWq+1G97km97nc3ve5vzN6SEGs5HlJeBbvannGJwOYYPFQuQWgK730SBWuwK35NrBtzHwqXZfxjh8zwEtvu5NDBoy1irqveeFuo2uG9OlqoDNM3xGJKtiJpJitwutrhb2vpHJb2HLyHlWJFIVYOpKsu4ZSQw9xG4rzuk1hnneYeUdN52mJlbBPEgaGOSOZm13kYaSvsBQD7V7gk7bCopnebRtmInjWTSixhtcbISVd7gBwCfC3O1qjPDHbFiYQqYpBikG2seGUf6X+nvqwMJ2g5PjAFkkRG/ZxCFbe5yNPyasWo01kotRfl+Do6TV11yTkvPj12/vBF8/zP7TiO+EbRju1jszAk6Wcg2UkKLN51hqSDcEgjcEGxHqCORqwv+4ctl3jkXf+rlFv1NeT8J4EbmdgPWRP5Vy7dFfObk8ZO3p+09JVWoRzheZFJeI8YRb7U6/lWO/zKGtMSqBmZuZ1O8jXZj5szG5O30qZYzG5Hhd5J0cj8IZpG/hjv+le+VPludRFY4rJh51bSUC6vDzsPwsCR5+GrLQ3zX+WW3uZ32ppam3RXv8AZfs1GS5DhjAMfiZokgtcMLXIvaxa1xvtYb1GeNu1HvEOFy5TBBaxktpdx1CjmgPmfEfTr98cQyQ5LgMKFZtMshkIUkDQzruRsLk338qq4GupptJXUvhOLq9dde/jf2XB+1kMO7W342H8K/zP6V4I1iD5edGYk3JuT1rYYT8vSlKAFKknBfBk+YvIsRCLGLtI4Om59ldup+nyra5h2TZpH7MSTj/w5Fv8pNP0vXnUk8ZPelkGr1wmGaR0jQandgijzJNh+tbPHcK46H/mYSZfXQSPmtxUy7D+Hu+xj4l1OnDDa4/pGBA59VW5+K0OSSyCi28F08M5OuEwsOHXlGgBP7Tc2b4m5raUpWI1ClKUAKUpQBXXa1wL9sj+0wL/AMTENwOcyDfT+YdPiOorn0i2x2I2IPMV13nGYJh4JZ32WJGc/AXt7zyrkzMca00skz+1I7O3vJvWmltrBCxLJj0pSqkxSlKAFKUoA/AK/Tvz3pSvQPwVNOyXiD7JmCBmtFOO6e/IEm6N8G29zGoZX4RXjWVg9Tw8nYkUKqLAAC5NvUm5+prn/tez7CSzmDCwQgxt95OqAMzC91BHMDqepHpUn7L+OftURy7EylJijJDLfxOLWtf+sXmD1A8xvUuf5HLgp2w8y6XTkRydejL6H+Y6VGuGJblJyytjX0pSrEhW24X4emx2IWCEbmxdj7Ma33Y/5Dqa1SAXFzYXFz5Dqa6o4M4bw+Bw6x4cXDAM0htqkJ3uSPfsOQFJZPpQ8I9Rk8M5DFgsOmHhHhUbsfadurN6n/atrSlZOTQK/AoHIWr9pQApSlAClKUAKUpQBVnbznvd4eLCKfFM2p/yL0+LW/hNUXU/7Z8vxYx7zzoe5fSkLjdNIHs3/C19RIPmbXFQCtdaxEzTeWKUr8JpxT9pU4yjssx+Iw32hVVCbFIpCVd18/Jelg1r+nWLZxkuIwracRC8J5DUNj7m5H4GvFJPg9cWjApSlengpSlAClKUAfqMQQQSpBuCDYgjcEEciPOrO4+zc4nJculxCo2JkdvGBY6F1gn+1ZCel6rPDQNIwSNWkc8lQEsfgN6nPaRleJhw2WLJEUijwypc9JSSzqR0NgLee/lSy5Qy4ZA6UpTCiumeynNTiMsw7E3aMGJv7BKg/FdJ+NczVcH/AGfs18WKwpPMLMn+B/8AR9anasxHre5c9KUrKaBSlKAFKUoAUpSgBSlKAPDG4SOVGjlRZEYWZWFwR7jVI8fdk7wap8CGli3LRc5Ixz8P7a+nte+r1pTRm48CyimcdQxMzKigszEKqgXJJNgAPO/Srx7N+y1YNGJxqh5tmSLYrF5Fv2n+g9edT+DhzCpiWxawIs7CxcDf1NuQY9SNzW1qk7c7IWNeORXxNCrqVdQynmGAIPvBr7pUShD837MstnuThxEx/FCSh+Q8J+IrnjiLLDhsViMOb/dSugJ5lQfAT6lbH411vXPnbnl3d5iJANp4lb+0vgP001eqTzhkrIrGSu6UpVyIq9eBuy7BNhcPPiY2llkQOVZzoF9wAq2vtbneqUyrAGeaKAc5XVPdcgE/Ab/CuuoYwqhVFgoAA8gNhUrZNbIpWsmNluVQYddMESRDyRQL++3Ov3NMuixETwzIHjcWZT/1sRzBrLpWbJc5h4+4Kly2axvJA5+6lPXrpa3Jx9RuOoEWrrrOcqixULwToHjcWIPTyIPQjmDVe8OdjeGhkMmJkOJAY92hFlt0L29pvTYelaI2rG5F177FUcKcGYvMG+4S0d7NK+0Y89/xH0H0q9eBuzzD5ce8BaacixkbYAHmFUbKPfc+tS6GJUUKqhVAsABYAeQA5V91OVjkPGCQpSlTHFKUoAUpSgBSlKAFKUoAUpSgBSlKAFKUoAVV3b7lmvCQTgbwyaT+Vxb/ABKtKU8PmQsuGUVoPkflTQfI/Kv2lazMTfsaywy5nGxB0wo8p99tC/Vr/CujqUrNa/iL18ClKVIoKUpQApSlAClKUAKUpQApSlAH/9k=" },
    { id: 2, title: "Basketball Match", category: "Sports", date: "2023-12-05", img: "https://media.istockphoto.com/id/1141191007/vector/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-silhouettes-run-soccer.jpg?s=612x612&w=0&k=20&c=SEabW4SHZ7blMHJPxZNSTl_anOMHO3whQI7HIMxFpSg=" },
    { id: 3, title: "Art Gallery Open", category: "Cultural", date: "2023-12-15", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400" }
];

const mockStudents = [
    { rank: 1, name: "Sarah Jenkins", branch: "CSE - 3rd Year", events: 15, points: 750 },
    { rank: 2, name: "Mike Ross", branch: "ECE - 4th Year", events: 12, points: 600 },
    { rank: 3, name: "Jessica Pearson", branch: "MBA - 1st Year", events: 10, points: 500 },
    { rank: 4, name: "Harvey Specter", branch: "Law - 2nd Year", events: 9, points: 450 },
    { rank: 5, name: "Louis Litt", branch: "Finance - 3rd Year", events: 8, points: 400 }
];

let events = [];
let registrations = [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    const storedEvents = localStorage.getItem('ah_events');
    const storedRegs = localStorage.getItem('ah_regs');
    events = storedEvents ? JSON.parse(storedEvents) : defaultEvents;
    registrations = storedRegs ? JSON.parse(storedRegs) : [];
}

function saveData() {
    localStorage.setItem('ah_events', JSON.stringify(events));
    localStorage.setItem('ah_regs', JSON.stringify(registrations));
}

// --- LOGIN LOGIC ---
function showLoginForm(role) {
    document.querySelector('.portal-choices').classList.add('hidden');
    document.getElementById('actualLoginForm').classList.remove('hidden');
    document.getElementById('selectedRole').value = role;
    document.getElementById('portalTitle').innerText = role === 'admin' ? 'Admin Portal Login' : 'Student Portal Login';
}

function resetLogin() {
    document.querySelector('.portal-choices').classList.remove('hidden');
    document.getElementById('actualLoginForm').classList.add('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const role = document.getElementById('selectedRole').value;
    const username = document.getElementById('username').value;
    
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app-container').classList.remove('hidden');
    
    document.getElementById('displayUser').innerText = username;
    document.getElementById('displayRole').innerText = role.toUpperCase();

    if(role === 'admin') {
        document.getElementById('adminMenu').classList.remove('hidden');
        navTo('admin-dashboard', document.querySelector('#adminMenu li'));
        initChart();
        renderLeaderboard();
    } else {
        document.getElementById('studentMenu').classList.remove('hidden');
        navTo('student-dashboard', document.querySelector('#studentMenu li'));
    }
    refreshGrids();
}

function logout() {
    location.reload();
}

// --- SIDEBAR NAVIGATION ---
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    sidebar.classList.toggle('active');
    
    if(window.innerWidth > 768) {
        if(sidebar.classList.contains('active')) {
            content.style.marginLeft = "260px";
        } else {
            content.style.marginLeft = "0";
        }
    }
}

function navTo(sectionId, element) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    document.querySelectorAll('.menu-list li').forEach(li => li.classList.remove('active'));
    if(element) element.classList.add('active');
}

// --- TOGGLE ADD EVENT FORM ---
function toggleEventForm() {
    const form = document.getElementById('eventFormContainer');
    form.classList.toggle('hidden');
}

// --- RENDERING DATA ---
function refreshGrids() {
    renderEvents(events, 'studentEventGrid', false);
    renderEvents(events, 'adminEventGrid', true); // Now renders in Manage Events section
    renderEvents(events.slice(0,2), 'studentSuggestionGrid', false);
    
    const myEvents = events.filter(e => registrations.includes(e.id));
    renderEvents(myEvents, 'myActivitiesGrid', false, true);
    
    updateStats();
}

function renderLeaderboard() {
    const tbody = document.getElementById('leaderboardTableBody');
    if(!tbody) return;
    tbody.innerHTML = "";
    mockStudents.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>#${s.rank}</td><td style="font-weight:bold; color:white;">${s.name}</td><td>${s.branch}</td><td>${s.events}</td><td style="color:var(--accent-yellow)">${s.points}</td><td><span class="status-badge">Active</span></td>`;
        tbody.appendChild(tr);
    });
}

function renderEvents(data, gridId, isAdmin, isMyActivity = false) {
    const grid = document.getElementById(gridId);
    if(!grid) return;
    grid.innerHTML = "";
    
    if(data.length === 0) {
        grid.innerHTML = "<div style='color:#666; grid-column: 1/-1; text-align:center; padding:20px;'>No events found here.</div>"; return;
    }

    data.forEach(ev => {
        let btn = "";
        if(isAdmin) {
            btn = `<button class="action-btn cancel" onclick="deleteEvent(${ev.id})"><i class="fas fa-trash"></i> Delete</button>`;
        } else if(isMyActivity) {
            btn = `<button class="action-btn cancel" onclick="unregisterEvent(${ev.id})">Cancel Registration</button>`;
        } else {
            if(registrations.includes(ev.id)) 
                btn = `<button class="action-btn" style="background:#333; color:#777; cursor:default;" disabled><i class="fas fa-check"></i> Registered</button>`;
            else
                btn = `<button class="action-btn" onclick="joinEvent(${ev.id})">Join Now</button>`;
        }

        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${ev.img}')"></div>
            <div class="card-body">
                <h4>${ev.title}</h4>
                <p><span style="color:var(--accent-yellow)">${ev.category}</span> | ${ev.date}</p>
            </div>
            <div class="card-footer">
                ${btn}
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateStats() {
    const regCount = registrations.length;
    const points = regCount * 50;
    const countEl = document.getElementById('stRegCount');
    const pointEl = document.getElementById('stPoints');
    if(countEl) countEl.innerText = regCount;
    if(pointEl) pointEl.innerText = points;
    const admCount = document.getElementById('admEventCount');
    if(admCount) admCount.innerText = events.length;
}

// --- ACTIONS ---
function joinEvent(id) {
    if(!registrations.includes(id)) {
        registrations.push(id);
        saveData();
        showToast("Registration successful! (+50 Points)");
        refreshGrids();
    }
}

function unregisterEvent(id) {
    if(confirm("Are you sure you want to cancel this registration?")) {
        registrations = registrations.filter(rId => rId !== id);
        saveData();
        showToast("Registration cancelled.");
        refreshGrids();
    }
}

function addNewEvent(e) {
    e.preventDefault();
    const title = document.getElementById('newEventTitle').value;
    const cat = document.getElementById('newEventCategory').value;
    const date = document.getElementById('newEventDate').value;
    const imgInput = document.getElementById('newEventImg').value;
    let img = imgInput || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400";

    events.push({ id: Date.now(), title: title, category: cat, date: date, img: img });
    saveData();
    showToast("New Event Created Successfully!");
    document.querySelector('form').reset();
    toggleEventForm(); // Close form
    refreshGrids();
}

function deleteEvent(id) {
    if(confirm("Permanently delete this event?")) {
        events = events.filter(e => e.id !== id);
        registrations = registrations.filter(rId => rId !== id);
        saveData();
        showToast("Event deleted.");
        refreshGrids();
    }
}

function filterEvents(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    const filtered = cat === 'All' ? events : events.filter(e => e.category === cat);
    renderEvents(filtered, 'studentEventGrid', false);
}

function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i class="fas fa-info-circle"></i> ${msg}`;
    document.getElementById('toast-container').appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3000);
}
function exportCSV() {
  const data = mockStudents; // use your existing data

  // CSV Header
  let csvContent = "Rank,Name,Branch,Events,Points\n";

  // CSV Rows
  data.forEach(row => {
    csvContent += 
      `${row.rank},${row.name},${row.branch},${row.events},${row.points}\n`;
  });

  // Create CSV file
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  // Trigger download
  const link = document.createElement("a");
  link.href = url;
  link.download = "leaderboard.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



function initChart() {
    const ctx = document.getElementById('mainChart');
    if(ctx) {
        const chartStatus = Chart.getChart("mainChart");
        if (chartStatus != undefined) { chartStatus.destroy(); }
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                datasets: [{
                    label: 'Student Participation',
                    data: [12, 19, 15, 25, 32],
                    borderColor: '#f1c40f',
                    backgroundColor: 'rgba(241, 196, 15, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { grid: { color: '#333' } }, x: { grid: { display: false } } }
            }
        });
    }

}


