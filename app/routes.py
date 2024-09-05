from flask import Blueprint, render_template, request, redirect, url_for
from .models import db, Item

main = Blueprint('main', __name__)

@main.route('/')
def index():
    items = Item.query.all()
    return render_template('index.html', items=items)

@main.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        item_name = request.form['item']
        if item_name:
            new_item = Item(item=item_name)
            db.session.add(new_item)
            db.session.commit()
        return redirect(url_for('main.index'))

    return render_template('add.html')
