import os,os.path
import string,base64
import random
import json
import datetime
import hashlib

class GenExamples:
    """Generate randomized things for seeding!"""
    LOREM = 'lorem ipsum dolor sit amet sea ea sadipscing reprehendunt brute everti ex cum diam nemore cum eu in ius enim erant iudico autem legere sea ut cu velit utamur eos tamquam periculis vel eu ad modus soluta ullamcorper qui offendit elaboraret usu ei'.split()
    FIRST_NAMES = ['James', 'John', 'Robert', 'Michael', 'Mary', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas', 'Patricia', 'Christopher', 'Linda', 'Barbara', 'Daniel', 'Paul', 'Mark', 'Elizabeth', 'Donald', 'Jennifer', 'George', 'Maria', 'Kenneth', 'Susan', 'Steven', 'Edward', 'Margaret', 'Brian', 'Ronald', 'Dorothy', 'Anthony', 'Lisa', 'Kevin', 'Nancy', 'Karen', 'Betty', 'Helen', 'Jason', 'Matthew', 'Gary', 'Timothy', 'Sandra', 'Jose', 'Larry', 'Jeffrey', 'Frank', 'Donna', 'Carol', 'Ruth', 'Scott', 'Eric', 'Stephen', 'Andrew', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Raymond', 'Shirley', 'Cynthia', 'Angela', 'Melissa', 'Brenda', 'Amy', 'Jerry', 'Gregory', 'Anna', 'Joshua', 'Virginia', 'Rebecca', 'Kathleen', 'Dennis', 'Pamela', 'Martha', 'Debra', 'Amanda', 'Walter', 'Stephanie', 'Willie', 'Patrick', 'Terry', 'Carolyn', 'Peter', 'Christine', 'Marie', 'Janet', 'Frances', 'Catherine']
    LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'Mcdonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd']
    skills = ["HTML","CSS","Javascript","Vue.js","Angular.js","React.js","Redux","Vuex","Flux","Dynamic Programming", "RESTful API","PHP","Node.js","Express.js","Django", "Ruby on Rails", "GoLang", "Scala", "SQL", "NoSQL"]
    user_type = ["Team Member", "Team Admin", "Site Admin"]
    photo_url = ["hello", "world", "face", "shoes", "flowers"]
    project_name = ["Google", "Project-Collab", "Snapchat", "Facebook", "DCS", "ta_feedback", "PCRS"]

    def __init__(self):
        # set the seed so we always get the same sequence of randoms
        random.seed(1234)

    def name(self):
        return "{} {}".format(random.choice(self.FIRST_NAMES), random.choice(self.LAST_NAMES))

    def sentence(self):
        words = [random.choice(self.LOREM) for _ in range(random.randint(5,10))]
        return " ".join(words + ["."]).capitalize()

    def paragraph(self):
        sentences = [self.sentence() for _ in range(random.randint(2,5))]
        return " ".join(sentences)

    def password(self):
        characters = string.ascii_letters + string.digits
        return "".join(random.choice(characters) for x in range(random.randint(8, 16)))

    def user_id(self, name=None):
        if not name:
            name = random.choice(self.LAST_NAMES)
        if " " in name:
            name = name.split()[-1]
        return name[:6].lower() + "{}".format(random.randint(0,100))
    def get_start_date(self):
         return datetime.datetime.now().isoformat()[0:10]

if __name__ == "__main__":
    import json
    gen = GenExamples()
    #to keep track of all the data generated so far
    current_data_set = {}
    out = []
    # NOTE:
    # Order to add insert statements
    # users
    # project
    # user_associations

    out.append('\c project-collab-db;')
    current_data_set['users'] = {}
    current_data_set['projects'] = {}
    # users add admins (1,0,0), instructors (0,1,0), and tas (0,0,1) as well
    # as some mixed
    # example insert statment:
    # INSERT INTO users VALUES ('prof0',0,1,0,'prof0',NULL);
    gen_user_id = 1
    for _ in range(10):
        names = [gen.name() for _ in range(10)]
        user_names = [gen.user_id(name) for name in names]
        password = gen.password()
        bio = gen.sentence()
        for name, user_name in zip(names, user_names):
            q = "INSERT INTO users (username, name, bio, password, type) VALUES ('{}','{}','{}','{}', 'student');".format(user_name, name, bio, password)
            current_data_set['users'][user_name] = {'name': name , 'id': gen_user_id }
            gen_user_id+=1
            out.append(q)
    out.append("")
    id = 1
    for name in gen.project_name:
        description = gen.paragraph()
        date = gen.get_start_date()
        status = 'approved' if random.randint(0,10) < 3 else 'unapproved'
        q = "INSERT INTO projects (name, description, project_start_date, status) VALUES ('{}','{}','{}', '{}');".format(name, description, date, status)
        current_data_set['projects'][name] = {'name': name, 'id': id}
        id += 1
        out.append(q)
    out.append("")

    for user in current_data_set['users'].keys():
        project_name = random.choice(current_data_set['projects'].keys())
        project_id = current_data_set['projects'][project_name]['id']
        user_id = current_data_set['users'][user]['id']
        admin_status = True if random.randint(0,10) < 3 else False
        project_status = 'unapproved'
        if admin_status:
            project_status = 'approved'
        q = "INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES ({},{},{},'{}');".format(user_id, project_id, admin_status, project_status)
        out.append(q)

    print("\n".join(out))
