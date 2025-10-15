import sys

if __name__ == "__main__":
    lenArgs = len(sys.argv)
    if lenArgs != 2 and lenArgs != 3:
        print("Expected 2 or 3 args")
        exit(1)
        
    filename = sys.argv[1]
    outFolder = sys.argv[2] if lenArgs == 3 else ""
    
    with open("src/htmlTemplates/banner.html", "r") as file:
        bannerHtml = file.read()
        
    with open(f"src/html/{filename}", "r") as file:
        contents = file.read()
        contents = contents.replace("<!-- BANNER -->", bannerHtml)
        with open(f"{outFolder}{filename}", "w") as outFile:
            outFile.write(contents)