from deta import Deta, _Base, _Drive

class Database:
    key: str|None = None
    deta: Deta|None = None

    bases: dict[str, _Base] = {}
    drives: dict[str, _Drive] = {}

    def __init__(self, deta_key: str|None=None) -> None:
        """
        Creates a database object that can contain data,
        database has deta support.
        """

        self.key = deta_key
        if self.key:
            self.deta = Deta(self.key)

        return None
    
    def new_base(self, base_name: str) -> bool:
        """
        Creates a base in the DataBase and returns true when created
        """

        if not self.deta: return False
        self.bases[base_name] = self.deta.Base(base_name)

        return True
    
    def new_drive(self, drive_name: str) -> bool:
        """
        Creates a drive in the DataBase and returns true when created
        """

        if not self.deta: return False
        self.drives[drive_name] = self.deta.Drive(drive_name)

        return True
    
    def get_file(self, drive_name: str):
        """
        //
        """

        return

