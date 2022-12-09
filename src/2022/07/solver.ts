enum ObjectType {
  file = 'file',
  directory = 'directory',
}

class FileSystem {
  _objectType: ObjectType;
  _name: string;
  _size: number = 0;
  _children: FileSystem[] = [];

  _parent: FileSystem | null = null;

  constructor(objectType: ObjectType, name: string, size?: number) {
    this._objectType = objectType;
    this._name = name;
    this._parent = null;

    if (size || size === 0) {
      this._size = size;
    }
  }

  public get objectType() {
    return this._objectType;
  }

  public get size() {
    return this._size ?? 0;
  }

  public get parent() {
    if (this._parent) {
      return this._parent;
    }

    return null;
  }

  public set parent(parent: FileSystem | null) {
    if (parent) {
      this._parent = parent;
    }
  }
  public addChild(child: FileSystem) {
    child.parent = this;
    this._children?.push(child);

    this.updateSize();
  }

  public findChild(name?: string) {
    if (!name) {
      return null;
    }

    return this._children?.find(child => child._name === name) ?? null;
  }

  public findDirectoriesWithMaxSize(maxSize: number): Array<FileSystem> {
    const foundDirectories: FileSystem[] = [];

    for (const child of this._children) {
      if (child.objectType === ObjectType.directory) {
        if (child.size <= maxSize) {
          foundDirectories.push(child);
        }
        const subChildren = child.findDirectoriesWithMaxSize(maxSize);
        foundDirectories.push(...subChildren);
      }
    }

    return foundDirectories;
  }

  public findDirectoriesWithMinSize(minSize: number): Array<FileSystem> {
    const foundDirectories: FileSystem[] = [];

    for (const child of this._children) {
      if (child.objectType === ObjectType.directory) {
        if (child.size >= minSize) {
          foundDirectories.push(child);
        }
        const subChildren = child.findDirectoriesWithMinSize(minSize);
        foundDirectories.push(...subChildren);
      }
    }

    if (this.parent === null && this.size >= minSize) {
      foundDirectories.push(this);
    }

    return foundDirectories;
  }

  private updateSize() {
    if (this._objectType === ObjectType.directory) {
      this._size = this._children?.reduce((sum, child) => sum + child.size, 0) ?? 0;
    }
    if (this.parent) {
      this.parent.updateSize();
    }
  }
}

export function solvePartOne(input: string[]) {
  const fileSystem = parseTerminalOutput(input);

  const directories = fileSystem.findDirectoriesWithMaxSize(100000);
  const sum = directories.reduce((sum, directory) => sum + directory.size, 0);

  return sum;
}

export function solvePartTwo(input: string[]) {
  const fileSystem = parseTerminalOutput(input);

  const totalSpaceAvailable = 70000000;
  const requiredSpace = 30000000;

  const usedSpace = fileSystem.size;
  const freeSpace = totalSpaceAvailable - usedSpace;

  const minDirectorySizeToRemove = requiredSpace - freeSpace;

  const directories = fileSystem.findDirectoriesWithMinSize(minDirectorySizeToRemove);
  const sum = Math.min(...directories.map(dir => dir.size));

  return sum;
}

export function parseTerminalOutput(data: string[]) {
  let fileSystem: FileSystem = new FileSystem(ObjectType.directory, '/');
  let currentDirectory: FileSystem | null = null;

  for (const item of data) {
    const splittedItem = item.split(' ');

    switch (splittedItem.at(0)) {
      case '$': {
        if (splittedItem.at(1) === 'cd') {
          switch (splittedItem.at(2)) {
            case '/':
              currentDirectory = fileSystem;
              break;
            case '..':
              const parent: FileSystem = currentDirectory?.parent ?? fileSystem;
              currentDirectory = parent;
              break;
            default:
              const newDirectory: FileSystem =
                currentDirectory?.findChild(splittedItem.at(2)) ?? fileSystem;
              currentDirectory = newDirectory;
              break;
          }
        }
        break;
      }
      case 'dir': {
        const name = splittedItem.at(1);
        if (!name) {
          break;
        }
        const newDirectory = new FileSystem(ObjectType.directory, name);
        currentDirectory?.addChild(newDirectory);
        break;
      }
      default: {
        const fileName = splittedItem.at(1);
        const size = parseInt(splittedItem.at(0) ?? '0', 10);
        if (!fileName) {
          break;
        }
        const newFile = new FileSystem(ObjectType.file, fileName, size);
        currentDirectory?.addChild(newFile);
        break;
      }
    }
  }

  return fileSystem;
}
